import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Musica } from 'src/app/models/musica';
@Component({
  selector: 'app-folclore',
  templateUrl: './folclore.component.html',
  styleUrls: ['./folclore.component.less']
})
export class FolcloreComponent implements OnInit {

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
    this.http.get<{musicas: Musica[]}>(environment.apiUrl + 'musicas').subscribe({
      next: (res) => {
        this.musicas = res.musicas;
        //console.log(this.musicas)
      }
    });
  }

  nome: string = ""
  procurar(nome:string){
    this.http.get<{musicas: Musica[]}>(environment.apiUrl + 'musicas/' + nome).subscribe({
      next: (res) => {
        this.musicas = res.musicas;
        //console.log(this.musicas)
      }
    });
  }
}
