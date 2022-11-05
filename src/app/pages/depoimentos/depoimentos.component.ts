import { Mensagem } from './../../shared/models/mensagens.model';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/service/app.service';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.css']
})
export class DepoimentosComponent implements OnInit {
  hasLogin: boolean = false;
  depoimentosAprovados!: Mensagem[];
  depoimentos!: Mensagem[];

  constructor(private service: AppService) { }

  ngOnInit() {
    this.getDepoimentos();

    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

  getDepoimentos(){
    this.service.getDepoimentoAprovado().subscribe(
      depoimentoAprov => this.depoimentosAprovados = depoimentoAprov
    )

    this.service.getDepoimento().subscribe(
      depoimentos => this.depoimentos = depoimentos
    )
  }


  deleteDepoimentoAprov(mensagem :Mensagem){
    this.service.deleteDepoimentoAprovado(mensagem).subscribe(()=> this.getDepoimentos() )

  }

  deleteDepoimento(mensagem :Mensagem){
    this.service.deleteDepoimento(mensagem).subscribe()
   setTimeout(() => this.getDepoimentos() , 2000)
  }

  aprovarDepoimento(mensagem :Mensagem){
    this.service.aprovarDepoimento(mensagem).subscribe()
    this.service.deleteDepoimento(mensagem).subscribe()
    setTimeout(() => this.getDepoimentos() , 2000)
  }

  postDepoimento(nome :string, text: string){
    let mensagem = {nome, text, id:''}
    this.service.addDepoimento(mensagem).subscribe()
   setTimeout(() => this.getDepoimentos() , 2000)
  }
}
