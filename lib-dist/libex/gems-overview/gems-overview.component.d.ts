import { OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
export declare class GemsOverviewComponent implements OnInit {
    userName: string;
    title: string;
    carouselOne: NgxCarousel;
    constructor();
    ngOnInit(): void;
    carouselItems: string[];
    myfunc(event: Event): void;
}
