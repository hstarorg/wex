export enum TabBarBorderStyle {
  black,
  white
}

export enum TabBarPosition {
  bottom,
  top
}

export interface TabBarItem {
  pagePath: string,
  text: string,
  iconPath: string,
  selectedIconPath?: string
}

export interface TabBarConfig {
  color: string;
  selectedColor: string;
  backgroundColor: string;
  borderStyle?: TabBarBorderStyle,
  list: TabBarItem[],
  position?: TabBarPosition
}
