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
  mensagens!: Mensagem[];
  depoimentos!: Mensagem[];

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getMensagem().subscribe(
      mensagens => this.mensagens = mensagens
    )

    this.service.getDepoimento().subscribe(
      depoimentos => this.depoimentos = depoimentos
    )

    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

}
