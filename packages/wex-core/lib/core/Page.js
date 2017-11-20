"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../utils/index");
var Page = /** @class */ (function () {
    function Page(options) {
    }
    Page.prototype.$$getOptions = function () {
        return index_1.util.getConfigObject(this);
    };
    return Page;
}());
exports.Page = Page;
