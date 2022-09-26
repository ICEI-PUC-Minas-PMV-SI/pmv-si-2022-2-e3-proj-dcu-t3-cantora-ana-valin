import { RedesSociais } from './../../shared/models/redesSociais.model';
import { AppService } from '../../shared/service/app.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  redesSociais!: RedesSociais[];
  hasLogin!: boolean;

  constructor(private service: AppService,
              @Inject(DOCUMENT) public document: Document
              ) { }

  ngOnInit() {
    this.service.getRedesSociais()
     .subscribe(redes => {
        this.redesSociais = redes;
      }
    )

    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

  goToSocial(url: string | undefined){
    this.document.location.href = (url? url: ''), "_blank"
  }
  save(instagram: string, facebook: string, twitter: string, youtube: string, spotify: string){
    let i: number = 0;
    if(!!instagram && instagram !== this.redesSociais[0].url){
    i++;
    this.redesSociais[0].url = instagram;
    i++;
    this.service.editRedesSociais(this.redesSociais[0].id, this.redesSociais[0]).subscribe();
    }
    if(!!facebook && facebook !== this.redesSociais[1].url){
    i++;
    this.redesSociais[1].url = facebook;
      this.service.editRedesSociais(this.redesSociais[1].id, this.redesSociais[1]).subscribe();
    }
    if(!!twitter && twitter !== this.redesSociais[2].url){
    i++;
    this.redesSociais[2].url = twitter;
      this.service.editRedesSociais(this.redesSociais[2].id, this.redesSociais[2]).subscribe();
    }
    if(!!youtube && youtube !== this.redesSociais[3].url){
    i++;
    this.redesSociais[3].url = youtube;
      this.service.editRedesSociais(this.redesSociais[3].id, this.redesSociais[3]).subscribe();
    }
    if(!!spotify && spotify !== this.redesSociais[4].url){
    i++;
    this.redesSociais[4].url = spotify;
      this.service.editRedesSociais(this.redesSociais[4].id, this.redesSociais[4]).subscribe();
    }
    if(i !== 0){
      alert('Redes Sociais editadas com sucesso')
    }
 }
}
