// TODO

import { LoadingOptions } from "./loadingOptions";
import { pathToFileURL } from "url";
import {resolve} from 'path';

export function loadDocument(doc: {[key: string]: string}, baseUri_ : string, loadingOptions?: LoadingOptions) {
    const baseUri = ensureBaseUri(baseUri_);
}

function ensureBaseUri(baseUri?: string) {
    if(baseUri == undefined) {
        return pathToFileURL(resolve("./")).toString() + "/";
    }

    return baseUri;
}

console.log(ensureBaseUri(undefined));

