export enum NavigationBarTextStyle {
  black,
  white
}

export enum BackgroundTextStyle {
  dark,
  light
}

export interface WindowConfig {
  navigationBarBackgroundColor?: string;
  navigationBarTextStyle?: NavigationBarTextStyle;
  navigationBarTitleText?: string;
  backgroundColor?: string;
  backgroundTextStyle?: BackgroundTextStyle;
  enablePullDownRefresh?: boolean;
  onReachBottomDistance?: number
}

export const WINDOW_CONFIG_DEFAULTS: WindowConfig = {
  navigationBarBackgroundColor: '#000',
  navigationBarTextStyle: NavigationBarTextStyle.white,
  backgroundColor: '#fff',
  backgroundTextStyle: BackgroundTextStyle.dark,
  enablePullDownRefresh: false,
  onReachBottomDistance: 50
};
