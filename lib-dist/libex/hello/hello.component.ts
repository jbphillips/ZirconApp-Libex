import { Component, OnInit } from '@angular/core';

import { ShellService, ZirconApp } from './../services/shell.service';
import { CurrentUserService } from '@zircon/gemsauth/dist/services/current.user.service';
import { UserProfile } from '@zircon/gemsauth/dist/modules/gems.cloud.dtos';

@Component({
  selector: 'libex-hello',
  template: `<div style="text-align:center"><h1>Welcome to {{title}}!</h1><img width="300" src="http://www.craftcuts.com/media/catalog/product/cache/42/image/d9ae38d158c965cc5cb1d8e855ff745b/s/t/stencilshape_basic_diamonds.jpg"><h2>Gems Shell service library test app</h2><div class="button-row"><button mat-raised-button color="primary" (click)="HelloGemsOnClick()">Hello Gemsauth</button> <button mat-raised-button color="primary" (click)="showAppMetadataOnClick()">Show App Metadata</button></div>{{zirconApp.displayName}}<br>{{zirconApp.description}}<br>{{zirconApp.iconPath}}<br></div>`,
  styles: [``],
  providers: [UserProfile, CurrentUserService]
})
export class HelloComponent implements OnInit {

  public userName: string;
  public title = 'libex';
  public zirconApp = new ZirconApp();

  constructor(
    public currentUserService: CurrentUserService,
    public userProfile: UserProfile,
    public shell: ShellService,
  ) {

    try {
      this.currentUserService.profile.subscribe(profile => this.userProfile = profile);
      this.userName = this.userProfile.FirstName + " " + this.userProfile.LastName;
    }
    catch (Error) {

      alert(Error.message);

    }

  }

  ngOnInit() {

   
  }

  showAppMetadataOnClick(){
  
    this.getAppMetedata();

  }

  public getAppMetedata() : ZirconApp {

    this.zirconApp.displayName = "Libex";
    this.zirconApp.description = "Libex App Example for GEMS Zircom";
    this.zirconApp.iconPath = "http://www.craftcuts.com/media/catalog/product/cache/42/image/d9ae38d158c965cc5cb1d8e855ff745b/s/t/stencilshape_basic_diamonds.jpg";

    return this.zirconApp;
  }

  public getUserName() {

    var _name;

    try {
      this.currentUserService.profile.subscribe(profile => this.userProfile = profile);
      this.userName = this.userProfile.FirstName + " " + this.userProfile.LastName;
    }
    catch (Error) {

      alert(Error.message);

    }

    if (this.userName != null) {

      _name = this.userName;
    }
    else {
      _name = " [no connection to gemsauth]";
    }

    return _name;

  }

  HelloGemsOnClick() {

    this.title = this.getUserName();

  }

}
