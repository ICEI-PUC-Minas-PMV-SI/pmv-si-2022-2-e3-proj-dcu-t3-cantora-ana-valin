import { User } from './../../shared/models/user.model';
import { AppService } from './../../shared/service/app.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User
  constructor(private service: AppService) { }

  ngOnInit() {
  }

  login(email:string, senha:string){
    this.user = {id:'1', email: email, senha: senha}
    this.service.login(this.user)
  }
}
