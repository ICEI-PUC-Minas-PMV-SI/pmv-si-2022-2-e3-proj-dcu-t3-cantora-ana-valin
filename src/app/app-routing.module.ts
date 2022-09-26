import { LoginComponent } from './pages/login/login.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CentralDeFasComponent } from './pages/central-de-fas/central-de-fas.component';
import { MusicasComponent } from './pages/musicas/musicas.component';
import { BiografiaComponent } from './pages/biografia/biografia.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '/home', component: HomeComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'biografia', component: BiografiaComponent },
  { path: 'musicas', component: MusicasComponent },
  { path: 'centralFas', component: CentralDeFasComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
