import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.less']
})
export class RegionalComponent implements OnInit {

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
        items: 2
      },
      1200:{
        items:  2
      }
    },
    nav: true
  }
}
