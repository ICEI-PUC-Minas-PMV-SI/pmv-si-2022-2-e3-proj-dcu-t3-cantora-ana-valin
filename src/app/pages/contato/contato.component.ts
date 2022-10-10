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

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getContato().subscribe(
      contato => this.contato = contato
    )
    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

}
