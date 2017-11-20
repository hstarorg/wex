"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../utils/index");
var Component = /** @class */ (function () {
    function Component(options) {
    }
    Component.prototype.$$getOptions = function () {
        return index_1.util.getConfigObject(this);
    };
    return Component;
}());
exports.Component = Component;
