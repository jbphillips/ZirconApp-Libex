import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LibexModule } from './libex/libex.module';

import { UserProfile } from '@zircon/gemsauth/dist/modules/gems.cloud.dtos';
import { LoginService } from '@zircon/gemsauth/dist/services/login.service';
import { CurrentUserService } from '@zircon/gemsauth/dist/services/current.user.service';
import { ClientService } from '@zircon/gemsauth/dist/services/client.service'; 

import { HelloComponent } from './libex/hello/hello.component';

const appRoutes: Routes = [

  //{ path: 'hello', component: HelloComponent } 

];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    LibexModule.forRoot()
  ],
  providers: [UserProfile, CurrentUserService, LoginService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
