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
  fileDown(valor:string | null){
    if(valor == null) return null
    return environment.fileUrl+valor
  }
  musicas: Musica[] = [];
  allLoad(){
    this.http.get<{musicas: Musica[]}>(environment.apiUrl + 'musicas/destaque').subscribe({
      next: (res) => {
        this.musicas = res.musicas;
        //console.log(this.musicas)
      }
    });
  }

}
