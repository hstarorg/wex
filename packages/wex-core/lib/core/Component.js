"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Component = /** @class */ (function () {
    function Component(options) {
    }
    Component.prototype.$$getComponentObject = function () {
        var _this = this;
        var config = {};
        Object.keys(this).forEach(function (k) {
            if (k !== '$$getComponentObject') {
                config[k] = _this[k];
            }
        });
        return config;
    };
    return Component;
}());
exports.Component = Component;
