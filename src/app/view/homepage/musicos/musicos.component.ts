import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { Artista } from 'src/app/models/musico';

@Component({
  selector: 'app-musicos',
  templateUrl: './musicos.component.html',
  styleUrls: ['./musicos.component.less']
})
export class MusicosComponent implements OnInit {

  constructor(private http: HttpClient) { }
  musico: Artista[]=[]
  fileDown(valor:string | null){
    if(valor == null) return null
    return environment.fileUrl+valor
  }
  exportArtista(){
    this.http.get<{artista:Artista[]}>(environment.apiUrl + 'artistas').subscribe({
      next: (res)=>{
        this.musico = res.artista
      }
    })
  }
  ngOnInit(): void {
    this.exportArtista()
  }

}
