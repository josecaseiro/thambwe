import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.desaprecer(true)
  }
  teste: boolean = false
  desaprecer(valor:boolean){
    this.teste = valor
  }

}
