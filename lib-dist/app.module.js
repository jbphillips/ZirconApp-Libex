import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibexComponent } from './app.component';
import { LibexModule } from './libex/libex.module';
import { UserProfile } from '@zircon/gemsauth/dist/modules/gems.cloud.dtos';
import { LoginService } from '@zircon/gemsauth/dist/services/login.service';
import { CurrentUserService } from '@zircon/gemsauth/dist/services/current.user.service';
import { ClientService } from '@zircon/gemsauth/dist/services/client.service';
import { NgxCarouselModule } from 'ngx-carousel';
import { HelloComponent } from './libex/hello/hello.component';
import { ValueChainComponent } from './libex/valueChain/valueChain.component';
var appRoutes = [
    { path: 'hello', component: HelloComponent },
    { path: 'valueChain', component: ValueChainComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        LibexComponent,
                        HelloComponent,
                        ValueChainComponent
                    ],
                    imports: [
                        // RouterModule.forRoot(
                        //   appRoutes,
                        //   { enableTracing: true } // <-- debugging purposes only
                        // ),
                        BrowserModule,
                        NgxCarouselModule,
                        LibexModule.forRoot()
                    ],
                    providers: [UserProfile, CurrentUserService, LoginService, ClientService],
                    bootstrap: [LibexComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map