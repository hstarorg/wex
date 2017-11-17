"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.util = {
    getConfigObject: function (obj, excludeKeys) {
        var _this = this;
        var config = {};
        excludeKeys.push('constructor');
        // 先原型
        var proto = obj.constructor.prototype;
        Object.keys(proto).forEach(function (k) {
            if (excludeKeys.indexOf(k) >= 0) {
                return;
            }
            config[k] = k;
        });
        // 后实例
        Object.keys(obj).forEach(function (k) {
            if (excludeKeys.indexOf(k) >= 0) {
                return;
            }
            config[k] = _this[k];
        });
        return config;
    }
};
