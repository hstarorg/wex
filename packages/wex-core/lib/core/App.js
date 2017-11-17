"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.$$getAppObject = function () {
        var _this = this;
        var config = {};
        Object.keys(this).forEach(function (k) {
            if (k !== '$$getAppObject') {
                config[k] = _this[k];
            }
        });
        return config;
    };
    return App;
}());
exports.App = App;
