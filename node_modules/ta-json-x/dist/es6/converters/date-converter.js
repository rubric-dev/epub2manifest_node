var DateConverter = /** @class */ (function () {
    function DateConverter() {
    }
    DateConverter.prototype.serialize = function (property) {
        return property.toString();
    };
    DateConverter.prototype.deserialize = function (value) {
        return new Date(value);
    };
    DateConverter.prototype.collapseArrayWithSingleItem = function () {
        return false;
    };
    return DateConverter;
}());
export { DateConverter };
