import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LibexModule } from './libex/libex.module';
import { UserProfile } from '@zircon/gemsauth/dist/modules/gems.cloud.dtos';
import { LoginService } from '@zircon/gemsauth/dist/services/login.service';
import { CurrentUserService } from '@zircon/gemsauth/dist/services/current.user.service';
import { ClientService } from '@zircon/gemsauth/dist/services/client.service';
import { HelloComponent } from './libex/hello/hello.component';
var appRoutes = [];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        HelloComponent
                    ],
                    imports: [
                        RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                        ),
                        BrowserModule,
                        LibexModule.forRoot()
                    ],
                    providers: [UserProfile, CurrentUserService, LoginService, ClientService],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map