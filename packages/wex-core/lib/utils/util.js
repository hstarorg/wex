"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LIFECYCLE_HOOKS = [
    'onLoad',
    'onReady',
    'onShow',
    'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onShareAppMessage',
    'onPageScroll'
];
exports.util = {
    getConfigObject: function (obj, excludeKeys) {
        var config = {};
        // 保证excludeKeys是数组
        !Array.isArray(excludeKeys) && (excludeKeys = []);
        excludeKeys.push('constructor', '$$getOptions');
        // 先原型
        var proto = Object.getPrototypeOf(obj);
        Object.keys(proto).forEach(function (k) {
            if (excludeKeys.indexOf(k) >= 0) {
                return;
            }
            // 只需要绑定生命周期钩子
            if (LIFECYCLE_HOOKS.indexOf(k) >= 0) {
                // 在onLoad中拦截vm对象
                if (k === 'onLoad') {
                    config[k] = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        obj.$$vm = this;
                        // 继续调用
                        proto[k].apply(obj, args);
                    };
                }
                else {
                    // 其他的钩子函数，直接绑定
                    config[k] = proto[k].bind(obj);
                }
            }
            else if (typeof proto[k] === 'function') {
                // 其他Function，直接绑定
                config[k] = proto[k].bind(obj);
            }
        });
        // 后实例
        // Object.keys(obj).forEach(k => {
        //   if (excludeKeys.indexOf(k) >= 0) {
        //     return;
        //   }
        //   config[k] = obj[k];
        // });
        config.data = Object.assign({}, obj.data);
        // 启用双向绑定
        this.makeReactive(obj.data, obj);
        return config;
    },
    getDiffObject: function (source, target) {
        var plainTarget = Object.assign({}, target);
        var targetKeys = Object.keys(target);
        var diffObj = {};
        targetKeys.forEach(function (k) {
            var v = source[k];
            if (!source.hasOwnProperty(k)) {
                diffObj[k] = target[k];
            }
            else if (v !== target[k]) {
                diffObj[k] = target[k];
            }
        });
        return diffObj;
    },
    makeReactive: function (data, root) {
        var _this = this;
        if (!data) {
            return;
        }
        Object.keys(data).forEach(function (k) {
            var v = data[k];
            if (_this.isObject(v)) {
                _this.makeReactive(v, root);
            }
            else {
                _this.defineReactive(data, k, v, root);
            }
        });
        return data;
    },
    isObject: function (value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
    },
    defineReactive: function (obj, key, value, root) {
        var self = this;
        var property = Object.getOwnPropertyDescriptor(obj, key);
        var getter = property && property.get;
        var setter = property && property.set;
        Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: true,
            get: function () {
                return getter ? getter.call(obj) : value;
            },
            set: function (newVal) {
                // 先取出当前值
                var val = getter ? getter.call(obj) : value;
                // 值一样，直接return
                if (newVal === val || (newVal !== newVal && val !== val)) {
                    return;
                }
                // 把值设置回去
                if (setter) {
                    setter.call(obj, newVal);
                }
                else {
                    value = newVal;
                }
                var diffObj = self.getDiffObject(root.$$vm.data, root.data);
                root.$$vm.setData(diffObj);
            }
        });
    }
};
