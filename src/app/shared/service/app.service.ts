import { CentralFas } from './../models/centralFas.model';
import { Mensagem } from './../models/mensagens.model';
import { Router, RouterModule } from '@angular/router';
import { RedesSociais } from './../models/redesSociais.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Agenda } from '../models/agenda.model';
import { Musicas } from '../models/musicas.model';
import { Biografia } from '../models/biografia.model';
import { Contato } from '../models/contato.model';
import { User } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url: string = environment.apiUrl;
  hasLogin = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient,
              private router: Router) {
                this.getUser().subscribe( user => this.user = user)
              }
  user!: User;

  getUser():Observable<User> {
    return this.httpClient.get<User>(`${this.url}/login/1`)
  }

  login(user: User) {
        console.log(this.user.id)
        console.log(this.user.email)
        console.log(this.user.senha)
        console.log(user.id)
        console.log(user.email)
        console.log(user.senha)
              if(user.email === this.user.email && user.senha === this.user.senha){
              this.hasLogin.next(true);
              this.router.navigate(['']);
            }else{
              alert('Email ou senha inválidos')
              this.hasLogin.next(false)
          }
      }

  logout() {
    this.hasLogin.next(false)
    this.router.navigate(['']);
  }

  getRedesSociais(): Observable<RedesSociais[]> {
    return this.httpClient.get<RedesSociais[]>(`${this.url}/redesSociais`);
  }

  editRedesSociais(id: string, redesSociais: RedesSociais) : Observable<RedesSociais> {
    return this.httpClient.patch<RedesSociais>(`${this.url}/redesSociais/${id}`, redesSociais, httpOptions)
      .pipe(
        tap(_ => console.log())
      );
  }

  deleteRedeSocial(redeSocial: RedesSociais): Observable<RedesSociais[]>{
    let endPoint = `/redessociais/${redeSocial.id}` ;
    this.httpClient.delete(this.url + endPoint).subscribe(()=> alert('Rede social excluida com sucesso'))
    return this.getAgenda()
  }

  hasLogin$(): Observable<boolean>{
    if(this.hasLogin.value){
      this.hasLogin.next(true)
      return this.hasLogin
    }else{
      this.hasLogin.next(false)
      return this.hasLogin;
    }
  }

  getAgenda(): Observable<Agenda[]> {
    return this.httpClient.get<Agenda[]>(`${this.url}/agenda`);
  }

  addAgenda(agenda: Agenda) : Observable<Agenda> {
    return this.httpClient.post<Agenda>(`${this.url}/agenda`, agenda, httpOptions)
      .pipe(
        tap(_ => alert('Evento criado com sucesso'))
      );
  }

  editAgenda(id: string, agenda: Agenda) : Observable<Agenda> {
    return this.httpClient.put<Agenda>(`${this.url}/agenda/${id}`, agenda, httpOptions)
      .pipe(
        tap(_ => alert('Evento editado com sucesso'))
      );
  }

  deleteAgenda(agenda: Agenda): Observable<Agenda[]>{
    let endPoint = `/agenda/${agenda.id}` ;
    this.httpClient.delete(this.url + endPoint).subscribe(()=> alert('Evento excluido com sucesso'))
    return this.getAgenda()
  }

  getMusicas(): Observable<Musicas[]> {
    return this.httpClient.get<Musicas[]>(`${this.url}/musicas`);
  }

  addMusicas(musica: Musicas) : Observable<Musicas> {
    return this.httpClient.post<Musicas>(`${this.url}/musicas`, musica, httpOptions)
      .pipe(
        tap(_ => alert('Musica postada com sucesso'))
      );
  }

  editMusicas(id: string, musica: Musicas) : Observable<Musicas> {
    return this.httpClient.patch<Musicas>(`${this.url}/musicas/${id}`, musica, httpOptions)
      .pipe(
        tap(_ => alert('Musica editada com sucesso'))
      );
  }

  deleteMusicas(musica: Musicas): Observable<Musicas[]>{
    let endPoint = `/musicas/${musica.id}` ;
    this.httpClient.delete(this.url + endPoint).subscribe(()=> alert('Musica excluida com sucesso'))
    return this.getMusicas()
  }

  getBiografia(): Observable<Biografia[]> {
    return this.httpClient.get<Biografia[]>(`${this.url}/biografia`);
  }

  editBiografia(biografia: Biografia) : Observable<Biografia> {
    return this.httpClient.patch<Biografia>(`${this.url}/biografia/${biografia.id}`, biografia, httpOptions)
      .pipe(
        tap(_ => alert('Biografia editada com sucesso'))
      );
  }

  getContato(): Observable<Contato[]> {
    return this.httpClient.get<Contato[]>(`${this.url}/contato`);
  }

  editContato(contato: Contato) : Observable<Contato> {
    return this.httpClient.patch<Contato>(`${this.url}/contato/${contato.id}`, contato, httpOptions)
      .pipe(
        tap(_ => alert('Contato editado com sucesso'))
      );
  }

  getFa(): Observable<CentralFas[]> {
    return this.httpClient.get<CentralFas[]>(`${this.url}/centralFas`);
  }

  getMensagem(): Observable<Mensagem[]> {
    return this.httpClient.get<Mensagem[]>(`${this.url}/mensagem`);
  }

  getDepoimento(): Observable<Mensagem[]> {
    return this.httpClient.get<Mensagem[]>(`${this.url}/depoimento`);
  }

  getDepoimentoAprovado(): Observable<Mensagem[]> {
    return this.httpClient.get<Mensagem[]>(`${this.url}/depoimentoAprovado`);
  }

  addDepoimento(depoimento: Mensagem) : Observable<Mensagem> {
    return this.httpClient.post<Mensagem>(`${this.url}/depoimento`, depoimento, httpOptions)
      .pipe(
        tap(_ => alert('Depoimento postado com sucesso'))
      );
  }

  addMensagem(mensagem: Mensagem) : Observable<Mensagem> {
    return this.httpClient.post<Mensagem>(`${this.url}/mensagem`, mensagem, httpOptions)
      .pipe(
        tap(_ => alert('Mensagem postada com sucesso'))
      );
  }

  addFa(fa: CentralFas) : Observable<CentralFas> {
    return this.httpClient.post<CentralFas>(`${this.url}/centralFas`, fa, httpOptions)
      .pipe(
        tap(_ => alert('Fã adicionado com sucesso'))
      );
  }

  deleteMensagem(mensagem: Mensagem): Observable<Mensagem[]> {
    let endPoint = `/mensagem/${mensagem.id}` ;
    this.httpClient.delete(this.url + endPoint).subscribe(()=> alert('Mensagem excluido com sucesso'))
    return this.getMensagem()
  }

  aprovarDepoimento(depoimento: Mensagem) : Observable<Mensagem> {
    return this.httpClient.post<Mensagem>(`${this.url}/depoimentoAprovado`, depoimento, httpOptions)
      .pipe(
        tap(_ => alert('Depoimento postado com sucesso'))
      );
  }

  deleteDepoimento(depoimento: Mensagem): Observable<Mensagem[]> {
    let endPoint = `/depoimento/${depoimento.id}` ;
    this.httpClient.delete(this.url + endPoint).subscribe(()=> alert('Depoimento excluido com sucesso'))
    return this.getDepoimento()
  }

  deleteDepoimentoAprovado(depoimento: Mensagem): Observable<Mensagem[]> {
    let endPoint = `/depoimentoAprovado/${depoimento.id}` ;
    this.httpClient.delete( this.url + endPoint).subscribe(()=> alert('Depoimento excluido com sucesso'))
    return this.getDepoimentoAprovado()
  }

  uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('image', image);

    return this.httpClient.post('/api/v1/image-upload', formData);
  }

}
