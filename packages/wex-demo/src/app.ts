import { App, LaunchOrShowConfig } from 'wex-core';

export default class DemoApp extends App {

  public globalObj = {
    a: 1,
    b: true
  };

  constructor() {
    super();
  }

  onLaunch(options: LaunchOrShowConfig) {
    console.log('abc');
  }
}
