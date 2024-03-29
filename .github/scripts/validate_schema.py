#!/usr/bin/env python3

"""
Clone the cwl-v1.2 repo and run against the tests directory for all files ending with cwl
"""
# Imports
import json
import sys
from typing import Dict
from jsonschema import validate, ValidationError
from pathlib import Path
from ruamel.yaml import YAML
import logging
from tempfile import TemporaryDirectory
from subprocess import run

# Globals
SCHEMA_PATH = Path(sys.argv[1])
CWL12_REPO_PARENT_TMPDIR_OBJ = TemporaryDirectory()
CWL12_REPO_DIR = Path(CWL12_REPO_PARENT_TMPDIR_OBJ.name) / "cwl-v1.2"

IGNORED_FILES = [
    'cwl-runner.cwl',  # Not a test file
    'cat5-tool.cwl'  # Rogue hints requirement
]

# Logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)


def clone_cwl12_repo():
    # Clone the cwl-v1.2 repo
    git_clone_command = [
        "git", "clone",
        "--branch", "main",
        "--depth", "1",
        "https://github.com/common-workflow-language/cwl-v1.2"
    ]

    # Run the git clone command
    git_clone_proc = run(
        git_clone_command,
        cwd=CWL12_REPO_PARENT_TMPDIR_OBJ.name,
        capture_output=True
    )

    if not git_clone_proc.returncode == 0:
        logging.error(f'Error cloning cwl-v1.2 repo: Stdout {git_clone_proc.stdout}')
        logging.error(f'Error cloning cwl-v1.2 repo: Stderr {git_clone_proc.stderr}')
        raise ChildProcessError(f'Error cloning cwl-v1.2 repo: {git_clone_proc.stderr}')


def import_schema(schema_path: Path) -> Dict:
    with open(schema_path, 'r') as schema_h:
        return json.load(schema_h)


def load_cwl_file(cwl_file: Path) -> Dict:
    # Initalise yaml loader
    yaml = YAML()

    with open(cwl_file, 'r') as cwl_h:
        # Load cwl file
        cwl_yaml = yaml.load(cwl_h)

    return dict(cwl_yaml)


def validate_cwl(cwl: Dict, schema: Dict) -> bool:
    try:
        validate(cwl, schema)
        logging.info(f"Passing: CWL file {cwl}")
        return True
    except ValidationError as e:
        logging.warning(f'Error validating {cwl}: {e}')
        return False


def main():
    # Clone v1.2 repo
    clone_cwl12_repo()

    schema_obj = import_schema(SCHEMA_PATH)
    passed = []
    failed = []

    for file in CWL12_REPO_DIR.rglob('*.cwl'):
        if file.name in IGNORED_FILES:
            continue
        # Load cwl file
        cwl_file = load_cwl_file(file)

        # Check if cwlVersion is a key in the cwl_file
        if 'cwlVersion' not in cwl_file:
            logging.info(f"Skipping {file} as it does not contain a cwlVersion key")
            logging.info(f"Likely not a CWL file")
            continue

        # Validate cwl file
        if validate_cwl(cwl_file, schema_obj):
            passed.append(file)
        else:
            failed.append(file)

    logging.info(f"Passed: {len(passed)}")
    logging.info(f"Failed: {len(failed)}")

    if len(failed) > 0:
        logging.warning("The following files failed validation:")
        for file_path in failed:
            logging.warning(file_path)
        raise ValueError(f"{len(failed)} files failed validation")


if __name__ == '__main__':
    main()
