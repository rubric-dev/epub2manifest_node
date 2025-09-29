var BufferConverter = /** @class */ (function () {
    function BufferConverter(encoding) {
        if (encoding === void 0) { encoding = "json"; }
        this._encoding = encoding;
    }
    BufferConverter.prototype.serialize = function (property) {
        if (this._encoding === "json") {
            return property.toJSON();
        }
        return property.toString(this._encoding);
    };
    BufferConverter.prototype.deserialize = function (value) {
        if (this._encoding === "json") {
            return Buffer.from(value.data);
        }
        return Buffer.from(value, this._encoding);
    };
    BufferConverter.prototype.collapseArrayWithSingleItem = function () {
        return false;
    };
    return BufferConverter;
}());
export { BufferConverter };
