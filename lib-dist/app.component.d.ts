import { ShellService, ZirconApp, ZirconNotification, NoticationType } from './libex/services/shell.service';
export declare class LibexComponent extends ZirconApp {
    shell: ShellService;
    notificationType: NoticationType;
    constructor(shell: ShellService);
    setZirconAppData(zirconAppData: ZirconApp): void;
    getLibexNotification(): ZirconNotification;
    setLibexNotification(notification: ZirconNotification): void;
    private processLibexNotificationDismiss(val);
    dismissNotificationOnClick(): void;
}
