import { PropertyDefinition } from "./property-definition";
import { JsonValueObject } from "../types";
export declare class ObjectDefinition {
    ctr: () => void;
    beforeDeserialized: () => void;
    onDeserialized: () => void;
    discriminatorProperty?: string;
    discriminatorValue: any;
    properties: Map<string, PropertyDefinition>;
    constructor();
    getProperty(key: string): PropertyDefinition;
}
export declare const objectDefinitions: Map<Function, ObjectDefinition>;
export declare function getDefinition(target: Function): ObjectDefinition;
export declare function getInheritanceChain(type: Object): Function[];
export declare function getTypedInheritanceChain(type: Function, object?: JsonValueObject): Function[];
