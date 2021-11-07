import Saveable from './saveable'
import { ValidationException } from './ValidationException'
import Typeguards = require('./typeguards')

interface Loader {
  load: (doc: any) => any
}

class RecordLoader implements Loader {
  createrFunc: (doc: any) => Saveable
  constructor (createrFunc: (doc: any) => Saveable) {
    this.createrFunc = createrFunc
  }

  load (doc: any): Saveable {
    return this.createrFunc(doc)
  }
}

class UnionLoader implements Loader {
  alternates: Loader[]

  constructor (alternates: Loader[]) {
    this.alternates = alternates
  }

  load (doc: any): Saveable {
    const errors = new Array<ValidationException>()
    for (const t of this.alternates) {
      try {
        return t.load(doc)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(new ValidationException('tried' + t.constructor.name + ' but', [e]))
        }
      }
    }
    throw new ValidationException('', errors).withBullet('-')
  }
}

function loadField (val: any, fieldType: Loader, baseuri: string, loadingOptions: any): any {
  // TODO: $import/include (instance of mutablemapping)
  return fieldType.load(val)
}

class Simple_schema extends Saveable {
  label?: string

  constructor (label?: string) {
    super()
    this.label = label
  }

  static fromDoc (doc: any): Saveable {
    if ('label' in doc) {
      try {
        var label: string | undefined = loadField(doc.label, union_of_none_type_or_strtype, '', undefined)
      } catch (e) {
        if (e instanceof ValidationException) { console.log(e.toString()) }
      }
    } else {
    }

    const schema = new Simple_schema(label)
    return schema
  }

  static attr: Set<string> = new Set(['label'])
}

interface Loader {
  load: (doc: any) => any
}

class PrimitiveLoader implements Loader {
  tp: (num: any) => boolean
  constructor (tp: (num: any) => boolean) {
    this.tp = tp
  }

  load (doc: any): any {
    if (!this.tp(doc)) {
      throw new ValidationException(`Expected a ${this.tp.name} but got ${(typeof doc)}`)
    }
    return doc
  }
}

/* eslint-disable*/
const strtype = new PrimitiveLoader(Typeguards.String)
const None_type = new PrimitiveLoader(Typeguards.Undefined)
const union_of_none_type_or_strtype = new UnionLoader([strtype, None_type])
const simple_schema_loader = new RecordLoader(Simple_schema.fromDoc)

console.log(simple_schema_loader.load({ label: 'test' })) // prints simple_schema { label: 'test' }
/* eslint-enable */
