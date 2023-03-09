import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.less']
})
export class RodapeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pagina(nome: string)
  {
    switch (nome) {
      case 'facebook':
        window.open('https://web.facebook.com/profile.php?id=100086403057675&_rdc=1&_rdr');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/thambwe_/');
        break;
      case 'youtube':
        window.open('https://www.youtube.com/channel/UCc4AHEvA9bROIfzxTc3h-xA/videos');
        break;
    }
  }

}
