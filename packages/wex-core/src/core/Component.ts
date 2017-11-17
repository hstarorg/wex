import { util } from '../utils/index';
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
    return util.getConfigObject(this, ['$$getComponentObject']);
  }
}
