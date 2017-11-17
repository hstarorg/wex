export interface LaunchOrShowConfig {
    path: string;
    query: object;
    scene: number;
    shareTicket: string;
    referrerInfo: {
        appId: string;
        extraData: object;
    };
}
export interface App {
    onLaunch(options: LaunchOrShowConfig): void;
    onShow(options: LaunchOrShowConfig): void;
    onHide(): void;
    onError(msg: string): void;
}
export declare abstract class App {
    constructor();
    $$getAppObject(): {};
}
