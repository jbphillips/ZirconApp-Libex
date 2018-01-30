import { Injectable } from '@angular/core';
import 'rxjs/add/observable/fromPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// class used to describe and work with apps
var ZirconApp = (function () {
    function ZirconApp() {
    }
    return ZirconApp;
}());
export { ZirconApp };
// class used to describe an work with notifications
var ZirconNotification = (function () {
    function ZirconNotification() {
        this.dismissSource = new BehaviorSubject(this);
        this.dismissed = this.dismissSource.asObservable(); // provides a way to tell owner app (or others who are interested) that notification was dismissed by user
    }
    ZirconNotification.prototype.Dismiss = function () {
        if (this.dismissable) {
            var val = this.dismissSource.getValue();
            this.dismissSource.next(val);
        }
    };
    return ZirconNotification;
}());
export { ZirconNotification };
var ShellService = (function () {
    function ShellService() {
        this.titleSource = new BehaviorSubject('');
        this.currentRouteSource = new BehaviorSubject('');
        this.appSource = new BehaviorSubject([]);
        this.notificationSource = new BehaviorSubject([]);
        //currentRoute = this.currentRoute.asObservable(); // current route in the shell content area
        this.title = this.titleSource.asObservable(); // title in the topbar
        this.apps = this.appSource.asObservable(); // list of defined app definitions
        this.notifications = this.notificationSource.asObservable(); // list of active notifications
    }
    ShellService.prototype.setTitle = function (val) {
        this.titleSource.next(val);
    };
    ShellService.prototype.setCurrentRoute = function (val) {
        this.currentRouteSource.next(val);
    };
    ShellService.prototype.addApp = function (val) {
        var list = this.appSource.getValue();
        var index = list.indexOf(val, 0);
        if (index == -1) {
            list.push(val);
            this.appSource.next(list);
        }
    };
    ShellService.prototype.removeApp = function (val) {
        var list = this.appSource.getValue();
        var index = list.indexOf(val, 0);
        if (index > -1) {
            list.splice(index, 1);
            this.appSource.next(list);
        }
    };
    ShellService.prototype.addNotification = function (val) {
        var list = this.notificationSource.getValue();
        var index = list.indexOf(val, 0);
        if (index == -1) {
            list.push(val);
            this.notificationSource.next(list);
        }
    };
    ShellService.prototype.removeNotification = function (val) {
        var list = this.notificationSource.getValue();
        var index = list.indexOf(val, 0);
        if (index > -1) {
            list.splice(index, 1);
            this.notificationSource.next(list);
        }
    };
    ShellService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ShellService.ctorParameters = function () { return []; };
    return ShellService;
}());
export { ShellService };
//# sourceMappingURL=shell.service.js.map