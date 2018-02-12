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
import { ZirconApp, ZirconNotification } from './libex/services/shell.service';
var libexNotification = new ZirconNotification();
var LibexComponent = (function (_super) {
    __extends(LibexComponent, _super);
    function LibexComponent() {
        var _this = _super.call(this) || this;
        _this.apps = [];
        _this.setZirconShellServiceData();
        if (libexNotification != null) {
            libexNotification.dismissed.subscribe(function (result) { _this.processLibexNotificationDismiss(result); });
        }
        return _this;
    }
    LibexComponent.prototype.setZirconShellServiceData = function () {
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
        console.log("Notification Dismissed: " + val.ownerModuleName);
    };
    //Shell service items
    LibexComponent.prototype.setTitle = function (val) {
        this.shellService.title.subscribe(function (result) { console.log(val); });
    };
    LibexComponent.prototype.addNotification = function (val) {
    };
    LibexComponent.prototype.removeNotification = function (val) {
    };
    LibexComponent.decorators = [
        { type: Component, args: [{
                    selector: 'libex-root',
                    template: "<libex-valueChain></libex-valueChain>",
                    styles: [".example-button-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}"]
                },] },
    ];
    /** @nocollapse */
    LibexComponent.ctorParameters = function () { return []; };
    return LibexComponent;
}(ZirconApp));
export { LibexComponent };
//# sourceMappingURL=app.component.js.map