import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HelloComponent } from './libex/hello/hello.component';
import { ShellService, ZirconApp, ZirconNotification, NoticationType } from './libex/services/shell.service';

let libexNotification = new ZirconNotification();

@Component({
  selector: 'libex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class LibexComponent extends ZirconApp {

  notificationType: NoticationType;
  apps: ZirconApp [] = [];

  constructor(public shell: ShellService) {
    super();

    this.setZirconAppData();
    this.setZirconShellServiceData();

    if (libexNotification != null) {
      libexNotification.dismissed.subscribe(result => { this.processLibexNotificationDismiss(result) });
    }
  }

  //Used for App development. These values declared in Zircon Shell manifest
  private setZirconAppData() {

      this.moduleName = "[moduleName]";
      this.moduleVersion = "[moduleVersion]";
      this.displayName = "[displayName]";
      this.description = "[description]";
      this.iconPath = "[iconPath]";
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

    alert("Notification Dismissed: " + val.ownerModuleName);

  }

  //Shell service items
  setTitle(val: string) {
    this.shell.title.subscribe(result => { console.log(val) });
  }
  
  addNotification(val: ZirconNotification) {
  }

  removeNotification(val: ZirconNotification) {
  }
}