import { NetworkTimeoutConfig } from './NetworkTimeoutConfig';
import { PageConfig } from './PageConfig';
import { TabBarConfig } from './TabBarConfig';
import { WindowConfig } from './WindowConfig';
export interface ApplicationConfig {
    pages: PageConfig[];
    window?: WindowConfig;
    tabBar?: TabBarConfig;
    networkTimeout?: NetworkTimeoutConfig;
    debug?: boolean;
}
