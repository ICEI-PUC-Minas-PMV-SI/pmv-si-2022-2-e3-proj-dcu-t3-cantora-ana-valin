import { Musicas } from './../../shared/models/musicas.model';
import { AppService } from './../../shared/service/app.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent implements OnInit {
  musicas!: Musicas[];
  musicaSelecionada!: Musicas;
  hasLogin: boolean = false;
  selectedFile!: ImageSnippet;
  imgSelected!: string;

  constructor(private service: AppService,
              @Inject(DOCUMENT) private document: Document
    ) { }

  ngOnInit() {
  this.getMusicas()

    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }
  getMusicas(){
    this.service.getMusicas().subscribe(
      musicas => this.musicas = musicas
    )
  }

  goToSocial(url: string | undefined){
    debugger
    this.document.location.href = url? url: '';
  }

  editMusica(nomeMusica: string, appleUrlMusica: string, deezerUrlMusica: string, spotifyUrlMusica: string, tidalUrlMusica: string, youtubeUrlMusica: string, imgMusica?: string) {
    let musica: Musicas = { id: this.musicaSelecionada.id, title: nomeMusica, imgUrl: this.imgSelected, links:{appleUrl: appleUrlMusica, deezerUrl: deezerUrlMusica, spotifyUrl: spotifyUrlMusica, tidalUrl: tidalUrlMusica, youtubeUrl: youtubeUrlMusica}, foto: this.musicaSelecionada.foto}
    this.service.editMusicas(musica.id, musica).subscribe(()=> this.getMusicas())
  }

  addMusica(nomeMusica: string, appleUrlMusica: string, deezerUrlMusica: string, spotifyUrlMusica: string, tidalUrlMusica: string, youtubeUrlMusica: string, imgMusica?: string) {
    let musica: Musicas = { id: '', title: nomeMusica, imgUrl: imgMusica, links:{appleUrl: appleUrlMusica, deezerUrl: deezerUrlMusica, spotifyUrl: spotifyUrlMusica, tidalUrl: tidalUrlMusica, youtubeUrl: youtubeUrlMusica}, foto: this.musicas[0].foto}
    this.service.addMusicas(musica).subscribe(() => this.getMusicas())
  }

  deleteMusica(musica: Musicas) {
    this.service.deleteMusicas(musica)
    setTimeout(() => this.getMusicas() , 2000);
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.service.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.imgSelected = res;

        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
  }
}



class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
