"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.util = {
    getConfigObject: function (obj, excludeKeys) {
        var config = {};
        // 保证excludeKeys是数组
        !Array.isArray(excludeKeys) && (excludeKeys = []);
        excludeKeys.push('constructor', '$$getOptions');
        // 先原型
        var proto = obj.constructor.prototype;
        Object.keys(proto).forEach(function (k) {
            if (excludeKeys.indexOf(k) >= 0) {
                return;
            }
            config[k] = proto[k];
        });
        // 后实例
        Object.keys(obj).forEach(function (k) {
            if (excludeKeys.indexOf(k) >= 0) {
                return;
            }
            config[k] = obj[k];
        });
        return config;
    }
};
