import { Component } from '@angular/core';
var GemsOverviewComponent = (function () {
    function GemsOverviewComponent() {
        this.title = 'Libex Gems Platform Overview Component';
        this.carouselItems = [
            './../../assets/images/valueChain/image1.png',
            './../../assets/images/valueChain/image2.png',
            './../../assets/images/valueChain/image3.png'
        ];
    }
    GemsOverviewComponent.prototype.ngOnInit = function () {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        };
    };
    GemsOverviewComponent.prototype.myfunc = function (event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
    };
    GemsOverviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'libex-gems-overview',
                    template: "<div style=\"text-align:center\"><a href=\"https://github.com/jbphillips/Gems.App.Seed\" class=\"hidden-xs\"><img style=\"position: absolute; top: 0; right: 0; border: 0; z-index: 2000\" src=\"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67\" alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png\"></a><div class=\"container-fluid container-demo\"><h4>Welcome to {{title}}!</h4><ngx-carousel [inputs]=\"carouselOne\" (carouselLoad)=\"myfunc($event)\"><ngx-item NgxCarouselItem *ngFor=\"let image of carouselItems\"><img src=\"{{image}}\" alt=\"image\"></ngx-item><button NgxCarouselPrev class=\"leftRs\">&lt;</button> <button NgxCarouselNext class=\"rightRs\">&gt;</button></ngx-carousel></div></div>",
                    styles: [".container-demo{margin-top:70px}.bannerStyle h1{background-color:#ccc;min-height:300px;text-align:center;line-height:300px}.leftRs,.rightRs{position:absolute;margin:auto;top:0;bottom:0;width:50px;height:50px;-webkit-box-shadow:1px 2px 10px -1px rgba(0,0,0,.3);box-shadow:1px 2px 10px -1px rgba(0,0,0,.3);border-radius:999px}.leftRs{left:0}.rightRs{right:0}"]
                },] },
    ];
    /** @nocollapse */
    GemsOverviewComponent.ctorParameters = function () { return []; };
    return GemsOverviewComponent;
}());
export { GemsOverviewComponent };
//# sourceMappingURL=gems-overview.component.js.map