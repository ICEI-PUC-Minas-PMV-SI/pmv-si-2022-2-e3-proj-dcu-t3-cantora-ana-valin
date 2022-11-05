import { RedesSociais } from './../../shared/models/redesSociais.model';
import { AppService } from '../../shared/service/app.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  redesSociais!: RedesSociais[];
  hasLogin!: boolean;
  formulario!: FormGroup;

  constructor(private service: AppService,
              @Inject(DOCUMENT) public document: Document
              ) { }

  ngOnInit() {
    this.getRedes()

    this.formulario = new FormGroup({
      redesForm: new FormBuilder().array([
        new FormGroup({
          redeUrl: new FormControl(''),
        }),
      ])
    });

    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

  getRedes(){
    this.service.getRedesSociais()
     .subscribe(redes => {
        this.redesSociais = redes;
      }
    )
  }

  goToSocial(url: string | undefined){
    this.document.location.href = (url? url: ''), "_blank"
  }
  save(){
    let i: number = 0;
    this.redesSociais.forEach(rede => {
      if(this.formulario.controls['redess'].value !== rede.url){
        i++;
        rede.url = this.formulario.controls['redess'].value;
        this.service.editRedesSociais(rede.id, rede).subscribe();
        }
    })
    if(i !== 0){
      alert('Redes Sociais editadas com sucesso')
    }
 }

 deleteRedeSocial(redeSocial: RedesSociais){
   this.service.deleteRedeSocial(redeSocial)
    this.getRedes()
 }


}
