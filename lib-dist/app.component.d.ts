import { ShellService, ZirconApp, ZirconNotification, NoticationType } from './libex/services/shell.service';
export declare class LibexComponent extends ZirconApp {
    notificationType: NoticationType;
    shellService: ShellService;
    apps: ZirconApp[];
    constructor();
    private setZirconShellServiceData();
    getLibexNotification(): ZirconNotification;
    setLibexNotification(notification: ZirconNotification): void;
    private processLibexNotificationDismiss(val);
    setTitle(val: string): void;
    addNotification(val: ZirconNotification): void;
    removeNotification(val: ZirconNotification): void;
}
