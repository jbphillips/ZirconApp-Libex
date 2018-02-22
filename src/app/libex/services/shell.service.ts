import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

// class used to describe and work with apps
export class ZirconApp {
  moduleName: string; // npm name
  moduleVersion: string; // npm version
  displayName: string; // app name for display
  description: string; // app description for display
  iconPath: string; // app icon resource (asset) path
  isFavorite: boolean; // true if already a favorite (on dashboard)
  appRoute: string; // main entry route for app
  settingsRoute: string; // setting route for app
  isRunning: boolean; // true if app is running (set by app read by shell)
  isInstalled: boolean; // true if app has been installed from the appStore
  canClose: boolean; // true if app can be closed (set by app read by shell)
  navPaths: string[]; // list of navbar categories where app should be shown
  keywords: string[]; // list of app relavent keyword for app searching
}

// available notification types
export type NoticationType = 'Server' | 'Message' | 'Warning' | 'Error';

// class used to describe an work with notifications
export class ZirconNotification {
  name: string; // name of notification
  description: string; // notification description... long text
  ownerModuleName: string; // npm name of associated app (could also be user, customer, or vendor)
  type: NoticationType; // type of notification
  appRoute: string; // entry route for app (only used when not null)
  urlParams: string; // parameter string supplied with appRoute invocation (only used when Approute not null)
  dismissable: boolean; // true if notification can be dismissed (Approute ignored when true)

  private dismissSource = new BehaviorSubject<ZirconNotification>(this);

  dismissed = this.dismissSource.asObservable(); // provides a way to tell owner app (or others who are interested) that notification was dismissed by user

  Dismiss() {
    if (this.dismissable) {
      var val = this.dismissSource.getValue();
      this.dismissSource.next(val);
    }
  }
}

@Injectable()
export class ShellService {
  private titleSource = new BehaviorSubject<string>('');
  private currentRouteSource = new BehaviorSubject<string>('');
  private appSource = new BehaviorSubject<ZirconApp[]>([]);
  private notificationSource = new BehaviorSubject<ZirconNotification[]>([]);

  constructor() {}

  currentRoute = this.currentRouteSource.asObservable(); // current route in the shell content area
  title = this.titleSource.asObservable(); // title in the topbar
  apps = this.appSource.asObservable(); // list of defined app definitions
  notifications = this.notificationSource.asObservable(); // list of active notifications

  setTitle(val: string) {
    this.titleSource.next(val);
  }

  setCurrentRoute(val: string) {
    this.currentRouteSource.next(val);
  }

  addApp(val: ZirconApp) {
    var list = this.appSource.getValue();
    var index = list.indexOf(val, 0);
    if (index == -1) {
      list.push(val);
      this.appSource.next(list);
    }
  }

  removeApp(val: ZirconApp) {
    var list = this.appSource.getValue();
    var index = list.indexOf(val, 0);
    if (index > -1) {
      list.splice(index, 1);
      this.appSource.next(list);
    }
  }

  updateApp(val: ZirconApp) {
    this.removeApp(val);
    this.addApp(val);
  }

  addNotification(val: ZirconNotification) {
    var list = this.notificationSource.getValue();
    var index = list.indexOf(val, 0);
    if (index == -1) {
      list.push(val);
      this.notificationSource.next(list);
    }
  }

  removeNotification(val: ZirconNotification) {
    var list = this.notificationSource.getValue();
    var index = list.indexOf(val, 0);
    if (index > -1) {
      list.splice(index, 1);
      this.notificationSource.next(list);
    }
  }
}
