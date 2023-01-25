import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Musica } from 'src/app/models/musica';
import { AudioService } from 'src/app/controllers/audio/audio.service';
@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.less']
})
export class MusicasComponent implements OnInit {

  constructor(private http: HttpClient, public audio: AudioService) { }

  ngOnInit(): void {
    this.allLoad()
    //console.log(this.allLoad())
    this.audio.getSSongs().subscribe(res => {
      if (res.length > 0) {
        this.playing = res[0];
      }
    })
  }

  playing: Musica | undefined;

  fileDown(valor: string | null) {
    if (valor == null) return null
    return environment.fileUrl + valor
  }
  musicas: Musica[] = [];
  allLoad() {
    this.http.get<{ musicas: Musica[] }>(environment.apiUrl + 'musica/destaque').subscribe({
      next: (res) => {
        this.musicas = res.musicas;
        console.log(this.musicas)
      }
    });
  }

  paused = false;

  playAudio(musica: Musica) {
    if (this.playing?.id == musica.id && !this.paused) {
      this.paused = true;
      this.audio.pause();
    } else {
      this.audio.playList([musica], 0);
      this.paused = false;
    }
  }

}
