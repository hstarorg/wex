
import { util } from '../utils/index';
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

  $$getOptions() {
    return util.getConfigObject(this);
  }
}
