import { getDefinition } from "../classes/object-definition";
// tslint:disable:ext-variable-name only-arrow-functions
export function JsonDiscriminatorValue(value) {
    return function (constructor) {
        getDefinition(constructor).discriminatorValue = value;
    };
}
