import { IPropertyConverter } from "../converters/converter";
export declare class PropertyDefinition {
    type: Function;
    array: boolean;
    set: boolean;
    readonly: boolean;
    writeonly: boolean;
    converter: IPropertyConverter;
    serializedName: string;
}
