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
eventoSelecionado: Agenda = {
  id: '',
  data: '',
  local: ''
}

  constructor(private service: AppService) { }

  ngOnInit() {
    this.getAgenda()

    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

  getAgenda(){
    this.service.getAgenda().subscribe(
      eventos =>{
         this.eventos = eventos
       });
  }

  onSelectEvent(evento: Agenda) {
    this.eventoSelecionado = evento;
  }

  editEvent(data: string, local: string) {
    let event = {data: data, local: local, id:this.eventoSelecionado.id}
    this.service.editAgenda(event.id, event).subscribe(() => this.getAgenda())
  }

  addEvent(data: string, local: string) {
    let event = {data: data, local: local ,id: ''}
    this.service.addAgenda(event).subscribe(() => this.getAgenda())
  }

  deleteEvent(evento: Agenda) {
    this.service.deleteAgenda(evento)
    setTimeout(() => this.getAgenda() , 2000);
  }
}
