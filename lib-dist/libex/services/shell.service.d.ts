import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
export declare class ZirconApp {
    moduleName: string;
    moduleVersion: string;
    displayName: string;
    description: string;
    iconPath: string;
    isFavorite: boolean;
    appRoute: string;
    settingsRoute: string;
    isRunning: boolean;
    isInstalled: boolean;
    canClose: boolean;
    navPaths: string[];
    keywords: string[];
}
export declare type NoticationType = 'Server' | 'Message' | 'Warning' | 'Error';
export declare class ZirconNotification {
    name: string;
    description: string;
    ownerModuleName: string;
    type: NoticationType;
    appRoute: string;
    urlParams: string;
    dismissable: boolean;
    private dismissSource;
    dismissed: Observable<ZirconNotification>;
    Dismiss(): void;
}
export declare class ShellService {
    private titleSource;
    private currentRouteSource;
    private appSource;
    private notificationSource;
    constructor();
    currentRoute: Observable<string>;
    title: Observable<string>;
    apps: Observable<ZirconApp[]>;
    notifications: Observable<ZirconNotification[]>;
    setTitle(val: string): void;
    setCurrentRoute(val: string): void;
    addApp(val: ZirconApp): void;
    removeApp(val: ZirconApp): void;
    updateApp(val: ZirconApp): void;
    addNotification(val: ZirconNotification): void;
    removeNotification(val: ZirconNotification): void;
}
