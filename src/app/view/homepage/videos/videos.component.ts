import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.less']
})
export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        margin: 5,
      },
      400: {
        items: 1
      },
      680: {
        items: 1,
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      },
      1000: {
        items: 4
      },
      1200:{
        items:  4
      }
    },
    nav: true
  }
}
