import { LoadingOptions } from "./loadingOptions";
import { Saveable } from "./saveable";
import {ValidationException} from "./ValidationException";

interface Loader {
    load(doc:any): any
}

class RecordLoader implements Loader {
    createrFunc : (doc:any) => Saveable;
    constructor(createrFunc : (doc:any) => Saveable) {
        this.createrFunc = createrFunc;
    }

    load (doc: any)  {
        return this.createrFunc(doc);
    }
}

class UnionLoader implements Loader {
    alternates: Array<Loader>

    constructor(alternates : Array<Loader>) {
        this.alternates = alternates;
    }
    
    load (doc:any)  {
        let errors = new Array<ValidationException>();
        for(let t of this.alternates) {
           try {
            return t.load(doc);
           } catch(e) {
               if(e instanceof ValidationException) {
                    errors.push(new ValidationException("tried" + t.constructor.name + " but", [e]));
               }
           }
        }
        throw new ValidationException("",errors).withBullet("-");
    }
}

function load_field(val: any, fieldType: Loader, baseuri:string, loadingOptions: any) {
    // TODO: $import/include (instance of mutablemapping)
    return fieldType.load(val)
} 

class simple_schema extends Saveable {
    label?: string;

    constructor(label?: string){
        super();
        this.label = label;
    }

    static fromDoc(doc: any): Saveable{

        if('label' in doc) {
            try {
                var label : string | undefined = load_field(doc["label"], union_of_none_type_or_strtype,"",undefined);
            }catch(e) {
                if(e instanceof ValidationException)
                    console.log(e.toString());
            }
        }else {
            var label : string|undefined = undefined;
        }

        let schema = new simple_schema(label);
        return schema;
    }

    static attr : Set<string> = new Set(["label"]);

}

interface Loader {
    load(doc:any): any
}


function Int(doc: any) {
    return typeof doc == "number" && Number.isInteger(doc);
}

function Float(doc: any) {
    return typeof doc == "number";
}

function Bool(doc: any) {
    return typeof doc == "boolean";
}

function String(doc: any) {
    return typeof doc == "string";
}

function Undefined(doc: any) {
    return typeof doc == "undefined";
}

class PrimitiveLoader implements Loader {
    tp: (num: any) => boolean;
    constructor(tp: (num: any) => boolean) {
        this.tp = tp;
    }

    load(doc:any) {
        if(!this.tp(doc)) {
            throw new ValidationException(`Expected a ${this.tp.name} but got ${(typeof doc)}`);
        }
        return doc
    }

}

let strtype = new PrimitiveLoader(String);
let None_type = new PrimitiveLoader(Undefined);
let union_of_none_type_or_strtype = new UnionLoader([strtype, None_type]);
let simple_schema_loader = new RecordLoader(simple_schema.fromDoc);

console.log(simple_schema_loader.load({label: "test"})); // prints simple_schema { label: 'test' }