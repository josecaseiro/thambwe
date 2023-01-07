import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Musica } from 'src/app/models/musica';
@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.less']
})
export class MusicasComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.allLoad()
  }
  musicas: Musica[] = [];
  allLoad(){
    this.http.get<{musica: Musica[]}>(environment.apiUrl + 'musicas').subscribe({
      next: (res) => {
        console.log(res)
        this.musicas = res.musica;
      }
    });
  }

}
