"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Page = /** @class */ (function () {
    function Page(options) {
    }
    Page.prototype.$$getPageObject = function () {
        var _this = this;
        var config = {};
        Object.keys(this).forEach(function (k) {
            if (k !== '$$getPageObject') {
                config[k] = _this[k];
            }
        });
        return config;
    };
    return Page;
}());
exports.Page = Page;
