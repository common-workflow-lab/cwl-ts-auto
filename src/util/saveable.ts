export abstract class Saveable {
    static fromDoc (doc: any): Saveable {
        throw new Error("Not Implemented");
    }
}