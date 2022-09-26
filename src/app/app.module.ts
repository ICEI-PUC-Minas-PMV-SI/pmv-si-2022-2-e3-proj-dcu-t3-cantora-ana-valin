import { LoginComponent } from './pages/login/login.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CentralDeFasComponent } from './pages/central-de-fas/central-de-fas.component';
import { HttpClientModule } from '@angular/common/http';
import { BiografiaComponent } from './pages/biografia/biografia.component';
import { MusicasComponent } from './pages/musicas/musicas.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AgendaComponent,
    MusicasComponent,
    BiografiaComponent,
    CentralDeFasComponent,
    ContatoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
