import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellService } from './services/shell.service';
var LibexModule = (function () {
    function LibexModule() {
    }
    LibexModule.forRoot = function () {
        return {
            ngModule: LibexModule,
            providers: [ShellService]
        };
    };
    LibexModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    LibexModule.ctorParameters = function () { return []; };
    return LibexModule;
}());
export { LibexModule };
//# sourceMappingURL=libex.module.js.map