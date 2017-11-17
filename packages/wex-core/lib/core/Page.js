"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../utils/index");
var Page = /** @class */ (function () {
    function Page(options) {
    }
    Page.prototype.$$getPageObject = function () {
        return index_1.util.getConfigObject(this, ['$$getPageObject']);
    };
    return Page;
}());
exports.Page = Page;
