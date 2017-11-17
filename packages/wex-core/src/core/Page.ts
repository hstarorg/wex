export interface Page {
  data: object;
  onLoad?(options: any): void;
  onReady?(): void;
  onShow?(): void;
  onHide?(): void;
  onUnload?(): void;
  onPullDownRefresh?(): void;
  onReachBottom(): void;
  onShareAppMessage(): void;
  onPageScroll(): void;
}

export abstract class Page {
  constructor(options: any) {

  }

  $$getPageObject() {
    const config = {};
    Object.keys(this).forEach(k => {
      if (k !== '$$getPageObject') {
        config[k] = this[k];
      }
    });
    return config;
  }
}
