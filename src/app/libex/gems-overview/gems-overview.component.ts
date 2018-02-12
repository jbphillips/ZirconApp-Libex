import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'libex-gems-overview',
  templateUrl: './gems-overview.component.html',
  styleUrls: ['./gems-overview.component.css']
})
export class GemsOverviewComponent implements OnInit {

  public userName: string;
  public title = 'Libex Gems Platform Overview Component';
  public carouselOne: NgxCarousel;

  constructor() {
  }

  ngOnInit() {

    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
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
    }

  }

  public carouselItems: string[] = [
    './../../assets/images/valueChain/image1.png',
    './../../assets/images/valueChain/image2.png',
    './../../assets/images/valueChain/image3.png'
  ];

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
 }

}
