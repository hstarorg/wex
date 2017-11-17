export interface NetworkTimeoutConfig {
  request?: number;
  connectSocket?: number;
  uploadFile?: number;
  downloadFile?: number;
}

export const NETWORK_TIMEOUT_CONFIG_DEFAULTS: NetworkTimeoutConfig = {
  request: 60000,
  connectSocket: 60000,
  uploadFile: 60000,
  downloadFile: 60000
};
