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
  getDiffObject(source: object, target: object) {
    const plainTarget = Object.assign({}, target);
    const targetKeys = Object.keys(target);
    const diffObj = {};
    targetKeys.forEach(k => {
      let v = source[k];
      if (!source.hasOwnProperty(k)) {
        diffObj[k] = target[k];
      } else if (v !== target[k]) {
        diffObj[k] = target[k];
      }
    });
    return diffObj;
  },
  makeReactive(data: any, root: any) {
    if (!data) {
      return;
    }
    Object.keys(data).forEach(k => {
      let v = data[k];
      if (this.isObject(v)) {
        this.makeReactive(v, root);
      } else {
        this.defineReactive(data, k, v, root);
      }
    });
    return data;
  },
  isObject(value: any) {
    const type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  },
  defineReactive(obj: object, key: string, value: any, root: any) {
    const self = this;
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
        const diffObj = self.getDiffObject(root.$$vm.data, root.data);
        root.$$vm.setData(diffObj);
      }
    })
  }
};
