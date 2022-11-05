import { Mensagem } from './../../shared/models/mensagens.model';
import { Contato } from './../../shared/models/contato.model';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/service/app.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  contato!: Contato[];
  hasLogin: boolean = false;
  mensagens!: Mensagem[];

  constructor(private service: AppService) { }

  ngOnInit() {
    this.getContato()
    this.getMensagem()
    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

  getMensagem(){
    this.service.getMensagem().subscribe(mensagem => this.mensagens = mensagem)
  }

  getContato() {
    this.service.getContato().subscribe(
      contato => this.contato = contato
    )
  }

  editContato(email: string, cel: string) {
    let contato = {email: email, cel: cel, id:this.contato[0].id}
    this.service.editContato(contato).subscribe(() =>  this.getContato())
  }

  addMensagem(email: string, nome: string, mensagem:string) {
    let mensagemDto = {email: email, nome: nome ,id: '', mensagem: mensagem}
    this.service.addMensagem(mensagemDto).subscribe(() =>  this.getMensagem())
  }

  deleteMensagem(mensagem: Mensagem){
    this.service.deleteMensagem(mensagem).subscribe()
    setTimeout(() => this.getMensagem() , 2000)
  }

  deleteContato(email: boolean) {
    if(!!email){
      this.contato[0].email = ''
    } else {
      this.contato[0].cel = ''
    }
    this.service.editContato(this.contato[0]).subscribe(() =>  this.getContato())
  }

}
