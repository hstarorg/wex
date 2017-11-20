import { Page } from 'wex-core';

export default class HomePage extends Page {
  data = {
    a: 1,
    b: 'acc',
    name: 'xxx',
    age: 1,
    abc: 1000,
    user: {
      name: 'jay'
    }
  };

  onLoad() {
    console.log('页面加载');
    this.test();
  }

  onShow() {
    console.log('on Show', this.data.a);
    setInterval(() => {
      this.data.name = Math.random().toString(16) + '---------' + this.data.abc;
    }, 10000);
  }

  test() {
    // this.data.age = Math.floor(Math.random() * 100);
    // this.data.abc = Math.floor(Math.random() * 1000);
    this.data.user.name =  Math.floor(Math.random() * 1000).toString();
  }

  handleClick(evt: any) {
    this.test();
  }
}
