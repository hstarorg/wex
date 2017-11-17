export declare enum TabBarBorderStyle {
    black = 0,
    white = 1,
}
export declare enum TabBarPosition {
    bottom = 0,
    top = 1,
}
export interface TabBarItem {
    pagePath: string;
    text: string;
    iconPath: string;
    selectedIconPath?: string;
}
export interface TabBarConfig {
    color: string;
    selectedColor: string;
    backgroundColor: string;
    borderStyle?: TabBarBorderStyle;
    list: TabBarItem[];
    position?: TabBarPosition;
}
