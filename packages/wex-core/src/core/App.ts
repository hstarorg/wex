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
    const config = {};
    Object.keys(this).forEach(k => {
      if (k !== '$$getAppObject') {
        config[k] = this[k];
      }
    });
    return config;
  }
}
