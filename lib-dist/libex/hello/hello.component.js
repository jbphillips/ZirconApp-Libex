import { Component } from '@angular/core';
//import { ZirconApp } from './../services/shell.service';//ShellService
import { CurrentUserService } from '@zircon/gemsauth/dist/services/current.user.service';
import { UserProfile } from '@zircon/gemsauth/dist/modules/gems.cloud.dtos';
var HelloComponent = (function () {
    function HelloComponent(currentUserService, userProfile
        //public shell: ShellService,
    ) {
        var _this = this;
        this.currentUserService = currentUserService;
        this.userProfile = userProfile;
        this.title = 'Libex Hello Component';
        try {
            this.currentUserService.profile.subscribe(function (profile) { return _this.userProfile = profile; });
            this.userName = this.userProfile.FirstName + " " + this.userProfile.LastName;
        }
        catch (Error) {
            console.log(Error.message);
        }
    }
    HelloComponent.prototype.ngOnInit = function () {
    };
    HelloComponent.prototype.getUserName = function () {
        var _this = this;
        var _name = " [no connection to gemsauth]";
        try {
            this.currentUserService.profile.subscribe(function (profile) { return _this.userProfile = profile; });
            _name = this.userProfile.FirstName + " " + this.userProfile.LastName;
        }
        catch (Error) {
            console.log(Error.message);
        }
        return _name;
    };
    HelloComponent.decorators = [
        { type: Component, args: [{
                    selector: 'libex-hello',
                    template: "<div style=\"text-align:center\"><a href=\"https://github.com/jbphillips/Gems.App.Seed\" class=\"hidden-xs\"><img style=\"position: absolute; top: 0; right: 0; border: 0; z-index: 2000\" src=\"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67\" alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png\"></a><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"container-fluid\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Gems.App.Seed</a></div><ul class=\"nav navbar-nav hidden-xs\"><li class=\"active\"><a href=\"javascript:;\">Demo</a></li><li><a href=\"https://github.com/jbphillips/Gems.App.Seed#installation\">Installation</a></li><li><a href=\"https://jbphillips.github.io/Gems.App.Seed/docs/\">Documentation</a></li></ul></div></nav><div class=\"container-fluid container-demo\"><h1>Welcome to {{title}}!</h1><title>Gems.App.Seed</title><h2>Gems Shell service library test app</h2></div></div>",
                    styles: [".container-demo{margin-top:70px}"],
                    providers: [UserProfile, CurrentUserService]
                },] },
    ];
    /** @nocollapse */
    HelloComponent.ctorParameters = function () { return [
        { type: CurrentUserService, },
        { type: UserProfile, },
    ]; };
    return HelloComponent;
}());
export { HelloComponent };
//# sourceMappingURL=hello.component.js.map