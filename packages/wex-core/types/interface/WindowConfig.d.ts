export declare enum NavigationBarTextStyle {
    black = 0,
    white = 1,
}
export declare enum BackgroundTextStyle {
    dark = 0,
    light = 1,
}
export interface WindowConfig {
    navigationBarBackgroundColor?: string;
    navigationBarTextStyle?: NavigationBarTextStyle;
    navigationBarTitleText?: string;
    backgroundColor?: string;
    backgroundTextStyle?: BackgroundTextStyle;
    enablePullDownRefresh?: boolean;
    onReachBottomDistance?: number;
}
export declare const WINDOW_CONFIG_DEFAULTS: WindowConfig;
