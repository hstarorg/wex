export interface NetworkTimeoutConfig {
    request?: number;
    connectSocket?: number;
    uploadFile?: number;
    downloadFile?: number;
}
export declare const NETWORK_TIMEOUT_CONFIG_DEFAULTS: NetworkTimeoutConfig;
