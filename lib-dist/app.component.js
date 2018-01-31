var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from '@angular/core';
import { ShellService, ZirconApp, ZirconNotification } from './libex/services/shell.service';
var libexNotification = new ZirconNotification();
var LibexComponent = (function (_super) {
    __extends(LibexComponent, _super);
    function LibexComponent(shell) {
        var _this = _super.call(this) || this;
        _this.shell = shell;
        if (libexNotification != null) {
            libexNotification.dismissed.subscribe(function (result) { _this.processLibexNotificationDismiss(result); });
        }
        return _this;
    }
    LibexComponent.prototype.setZirconAppData = function (zirconAppData) {
        if (zirconAppData != null) {
            this.moduleName = zirconAppData.moduleName; //"libex-project";
            this.moduleVersion = zirconAppData.moduleVersion; //"1.0.5";
            this.displayName = zirconAppData.displayName; //"Libex Main Component";
            this.description = zirconAppData.description; //"A library example for Gems Zircon Platform";
            this.iconPath = zirconAppData.iconPath; //"./assets/logo.jpg";
        }
        else {
            this.moduleName = "[moduleName]";
            this.moduleVersion = "[moduleVersion]";
            this.displayName = "[displayName]";
            this.description = "[description]";
            this.iconPath = "[iconPath]";
        }
    };
    //ZirconNotifications 
    LibexComponent.prototype.getLibexNotification = function () {
        libexNotification.dismissable = true;
        libexNotification.type = this.notificationType;
        return libexNotification;
    };
    LibexComponent.prototype.setLibexNotification = function (notification) {
        libexNotification = notification;
    };
    LibexComponent.prototype.processLibexNotificationDismiss = function (val) {
        alert("Notification Dismissed: " + val.ownerModuleName);
    };
    LibexComponent.prototype.dismissNotificationOnClick = function () {
        var _this = this;
        try {
            libexNotification.dismissed.subscribe(function (result) { _this.processLibexNotificationDismiss(result); });
        }
        catch (Error) {
            console.log(Error.message);
        }
    };
    LibexComponent.decorators = [
        { type: Component, args: [{
                    selector: 'libex-root',
                    template: "<libex-hello></libex-hello>",
                    styles: [".example-button-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}"]
                },] },
    ];
    /** @nocollapse */
    LibexComponent.ctorParameters = function () { return [
        { type: ShellService, },
    ]; };
    return LibexComponent;
}(ZirconApp));
export { LibexComponent };
//# sourceMappingURL=app.component.js.map