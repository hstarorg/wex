export declare const util: {
    getConfigObject(obj: any, excludeKeys?: string[]): object;
    getDiffObject(source: object, target: object): {};
    makeReactive(data: any, root: any): any;
    isObject(value: any): boolean;
    defineReactive(obj: object, key: string, value: any, root: any): void;
};
