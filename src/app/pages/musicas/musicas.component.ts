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
  constructor(private service: AppService,
              @Inject(DOCUMENT) private document: Document
    ) { }

  ngOnInit() {
    this.service.getMusicas().subscribe(
      musicas => this.musicas = musicas
    )
  }

  goToSocial(url: string | undefined){
    debugger
    this.document.location.href = url? url: '';
  }

}
