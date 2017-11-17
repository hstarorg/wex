"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavigationBarTextStyle;
(function (NavigationBarTextStyle) {
    NavigationBarTextStyle[NavigationBarTextStyle["black"] = 0] = "black";
    NavigationBarTextStyle[NavigationBarTextStyle["white"] = 1] = "white";
})(NavigationBarTextStyle = exports.NavigationBarTextStyle || (exports.NavigationBarTextStyle = {}));
var BackgroundTextStyle;
(function (BackgroundTextStyle) {
    BackgroundTextStyle[BackgroundTextStyle["dark"] = 0] = "dark";
    BackgroundTextStyle[BackgroundTextStyle["light"] = 1] = "light";
})(BackgroundTextStyle = exports.BackgroundTextStyle || (exports.BackgroundTextStyle = {}));
exports.WINDOW_CONFIG_DEFAULTS = {
    navigationBarBackgroundColor: '#000',
    navigationBarTextStyle: NavigationBarTextStyle.white,
    backgroundColor: '#fff',
    backgroundTextStyle: BackgroundTextStyle.dark,
    enablePullDownRefresh: false,
    onReachBottomDistance: 50
};
