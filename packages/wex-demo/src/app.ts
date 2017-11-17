import { App, LaunchOrShowConfig } from 'wex-core';

export default class DemoApp extends App {

  constructor() {
    super();
  }

  onLaunch(options: LaunchOrShowConfig) {
    console.log('abc');
  }
}
