import { Agenda } from './../../shared/models/agenda.model';
import { AppService } from './../../shared/service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
eventos!: Agenda[];
hasLogin: boolean = false;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getAgenda().subscribe(
      eventos => this.eventos = eventos
    )

    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

}
