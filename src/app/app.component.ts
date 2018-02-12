import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HelloComponent } from './libex/hello/hello.component';
import { ValueChainComponent } from './libex/valueChain/valueChain.component';
import { ShellService, ZirconApp, ZirconNotification, NoticationType } from './libex/services/shell.service';

let libexNotification = new ZirconNotification();

@Component({
  selector: 'libex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class LibexComponent extends ZirconApp {

  notificationType: NoticationType;
  shellService: ShellService;
  apps: ZirconApp [] = [];

  constructor() {
    super();

    this.setZirconShellServiceData();

    if (libexNotification != null) {
      libexNotification.dismissed.subscribe(result => { this.processLibexNotificationDismiss(result) });
    }
  }

  private setZirconShellServiceData(){

  }

  //ZirconNotifications 
  public getLibexNotification(): ZirconNotification {

    libexNotification.dismissable = true;
    libexNotification.type = this.notificationType;

    return libexNotification;
  }

  public setLibexNotification(notification: ZirconNotification) {

    libexNotification = notification;

  }

  private processLibexNotificationDismiss(val: ZirconNotification) {

    console.log("Notification Dismissed: " + val.ownerModuleName);

  }

  //Shell service items
  setTitle(val: string) {
    this.shellService.title.subscribe(result => { console.log(val) });
  }

  addNotification(val: ZirconNotification) {
  }

  removeNotification(val: ZirconNotification) {
  }
}