import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/service/app.service';

@Component({
  selector: 'app-central-de-fas',
  templateUrl: './central-de-fas.component.html',
  styleUrls: ['./central-de-fas.component.css']
})
export class CentralDeFasComponent implements OnInit {
  hasLogin: boolean = false;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

  addFa(email: string, nome: string, cel: string) {
    let fa = {email: email, nome: nome ,id: '', cel: cel}
    this.service.addFa(fa).subscribe( () => fa)
  }
}
