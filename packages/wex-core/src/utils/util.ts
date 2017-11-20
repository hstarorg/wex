const LIFECYCLE_HOOKS = [
  'onLoad',
  'onReady',
  'onShow',
  'onHide',
  'onUnload',
  'onPullDownRefresh',
  'onReachBottom',
  'onShareAppMessage',
  'onPageScroll'
];
export const util = {
  getConfigObject(obj: any, excludeKeys?: string[]): object {
    const config: any = {};
    // 保证excludeKeys是数组
    !Array.isArray(excludeKeys) && (excludeKeys = []);
    excludeKeys.push('constructor', '$$getOptions');

    // 先原型
    const proto = Object.getPrototypeOf(obj);
    Object.keys(proto).forEach(k => {
      if (excludeKeys.indexOf(k) >= 0) {
        return;
      }
      // 只需要绑定生命周期钩子
      if (LIFECYCLE_HOOKS.indexOf(k) >= 0) {
        // 在onLoad中拦截vm对象
        if (k === 'onLoad') {
          config[k] = function (...args: any[]) {
            obj.$$vm = this;
            // 继续调用
            proto[k].apply(obj, args);
          }
        } else {
          // 其他的钩子函数，直接绑定
          config[k] = proto[k].bind(obj);
        }
      } else if (typeof proto[k] === 'function') {
        // 其他Function，直接绑定
        config[k] = proto[k].bind(obj);
      }
    });
    // 后实例
    // Object.keys(obj).forEach(k => {
    //   if (excludeKeys.indexOf(k) >= 0) {
    //     return;
    //   }
    //   config[k] = obj[k];
    // });
    config.data = (Object as any).assign({}, obj.data);
    // 启用双向绑定
    this.makeReactive(obj.data, obj);
    return config;
  },
  makeReactive(data: any, root: any) {
    if (!data) {
      return;
    }
    Object.keys(data).forEach(k => {
      this.defineReactive(data, k, data[k], root);
    });
    return data;
  },
  defineReactive(obj: object, key: string, value: any, root: any) {
    var property = Object.getOwnPropertyDescriptor(obj, key);
    var getter = property && property.get;
    var setter = property && property.set;
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get() {
        return getter ? getter.call(obj) : value;
      },
      set(newVal) {
        // 先取出当前值
        var val = getter ? getter.call(obj) : value;
        // 值一样，直接return
        if (newVal === val || (newVal !== newVal && val !== val)) {
          return;
        }
        // 把值设置回去
        if (setter) {
          setter.call(obj, newVal);
        } else {
          value = newVal;
        }
        root.$$vm.setData({
          [key]: newVal
        });
      }
    })
  }
};
