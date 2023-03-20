import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Musica, Volume } from 'src/app/models/musica';
import { AudioService } from 'src/app/controllers/audio/audio.service';
@Component({
  selector: 'app-folclore',
  templateUrl: './folclore.component.html',
  styleUrls: ['./folclore.component.less']
})
export class FolcloreComponent implements OnInit {

  constructor(private http: HttpClient, public audio: AudioService) { }

  ngOnInit(): void {
    this.loadVolumes();
    this.audio.getSSongs().subscribe(res => {
      if (res.length > 0) {
        this.playing = res[0];
      }
    })
  }
  fileDown(valor: string | null) {
    if (valor == null) return null
    return environment.fileUrl + valor
  }

  disco : number = 0;
  pagina : string = '';

  fitas : any;
  escolha : any;
  musica : number = 0;
  volumes: Volume[] = [];

  loadVolumes() {
    this.http.get<Volume[]>(environment.apiUrl + 'volumes').subscribe({
      next: (res) => {
        this.volumes = res;
      }
    });
  }




  nome: string = ""
  procurar(nome: string) {}

  discoSelecao(id: number)
  {
    this.pagina = 'fitas';
    this.escolha = this.volumes[id];
  }

  abrirFita(id: number)
  {
    this.pagina = 'musicas';
    this.fitas = this.escolha.fitas[id];
    // console.log(this.fitas)
  }


  paused = false;
  playing: Musica | undefined;

  playAudio(musica: Musica) {
    if (this.playing?.id == musica.id && !this.paused) {
      this.paused = true;
      this.audio.pause();
    } else {
      this.audio.playList([musica], 0);
      this.paused = false;
    }
  }

  regresso(pagina : string)
  {
    this.pagina =pagina;
  }
}
