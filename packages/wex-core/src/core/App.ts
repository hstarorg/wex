import { util } from '../utils/index';
export interface LaunchOrShowConfig {
  path: string
  query: object,
  scene: number,
  shareTicket: string,
  referrerInfo: {
    appId: string,
    extraData: object
  }
}

export interface App {
  onLaunch(options: LaunchOrShowConfig): void;
  onShow(options: LaunchOrShowConfig): void;
  onHide(): void;
  onError(msg: string): void;
}

export abstract class App {
  constructor() {

  }

  $$getAppObject() {
    return util.getConfigObject(this, ['$$getAppObject']);
  }
}
