import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  teste: boolean = true
  desaprecer(valor:boolean){
    this.teste = valor
  }

}
