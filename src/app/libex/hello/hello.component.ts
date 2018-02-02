import { Component, OnInit } from '@angular/core';

//import { ZirconApp } from './../services/shell.service';//ShellService
import { CurrentUserService } from '@zircon/gemsauth/dist/services/current.user.service';
import { UserProfile } from '@zircon/gemsauth/dist/modules/gems.cloud.dtos';

@Component({
  selector: 'libex-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [UserProfile, CurrentUserService]
})
export class HelloComponent implements OnInit {

  public userName: string;
  public title = 'Libex Hello Component';

  constructor(
    public currentUserService: CurrentUserService,
    public userProfile: UserProfile
    //public shell: ShellService,
  ) {

    try {
      this.currentUserService.profile.subscribe(profile => this.userProfile = profile);
      this.userName = this.userProfile.FirstName + " " + this.userProfile.LastName;
    }
    catch (Error) {
      console.log(Error.message);
    }
  }

  ngOnInit() { 
  }  

  public getUserName() {
    var _name = " [no connection to gemsauth]";

    try {
      this.currentUserService.profile.subscribe(profile => this.userProfile = profile);
      _name = this.userProfile.FirstName + " " + this.userProfile.LastName;
    }
    catch (Error) {
      console.log(Error.message);
    }

    return _name;
  }
}
