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

  constructor(private service: AppService,
              @Inject(DOCUMENT) private document: Document
    ) { }

  ngOnInit() {
    this.service.getMusicas().subscribe(
      musicas => this.musicas = musicas
    )

    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

  goToSocial(url: string | undefined){
    debugger
    this.document.location.href = url? url: '';
  }

}
