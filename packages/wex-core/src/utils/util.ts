export const util = {
  getConfigObject(obj: any, excludeKeys?: string[]): object {
    const config = {};
    // 保证excludeKeys是数组
    !Array.isArray(excludeKeys) && (excludeKeys = []);
    excludeKeys.push('constructor', '$$getOptions');
    // 先原型
    const proto = obj.constructor.prototype;
    Object.keys(proto).forEach(k => {
      if (excludeKeys.indexOf(k) >= 0) {
        return;
      }
      config[k] = proto[k];
    });
    // 后实例
    Object.keys(obj).forEach(k => {
      if (excludeKeys.indexOf(k) >= 0) {
        return;
      }
      config[k] = obj[k];
    });
    return config;
  }
};
