export interface Component {
  // data: object;
  // onLoad?(options: any): void;
  // onReady?(): void;
  // onShow?(): void;
  // onHide?(): void;
  // onUnload?(): void;
  // onPullDownRefresh?(): void;
  // onReachBottom(): void;
  // onShareAppMessage(): void;
  // onPageScroll(): void;
}


export class Component {
  constructor(options: any) {

  }

  $$getComponentObject() {
    const config = {};
    Object.keys(this).forEach(k => {
      if (k !== '$$getComponentObject') {
        config[k] = this[k];
      }
    });
    return config;
  }
}
