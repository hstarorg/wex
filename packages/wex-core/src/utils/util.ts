export const util = {
  getConfigObject(obj: any, excludeKeys: string[]): object {
    const config = {};
    excludeKeys.push('constructor');
    // 先原型
    const proto = obj.constructor.prototype;
    Object.keys(proto).forEach(k => {
      if (excludeKeys.indexOf(k) >= 0) {
        return;
      }
      config[k] = k;
    });
    // 后实例
    Object.keys(obj).forEach(k => {
      if (excludeKeys.indexOf(k) >= 0) {
        return;
      }
      config[k] = this[k];
    });
    return config;
  }
};
