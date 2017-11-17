"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../utils/index");
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.$$getAppObject = function () {
        return index_1.util.getConfigObject(this, ['$$getAppObject']);
    };
    return App;
}());
exports.App = App;
