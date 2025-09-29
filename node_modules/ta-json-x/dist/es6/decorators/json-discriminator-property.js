import { getDefinition } from "../classes/object-definition";
// tslint:disable:ext-variable-name only-arrow-functions
export function JsonDiscriminatorProperty(property) {
    return function (constructor) {
        getDefinition(constructor).discriminatorProperty = property;
    };
}
