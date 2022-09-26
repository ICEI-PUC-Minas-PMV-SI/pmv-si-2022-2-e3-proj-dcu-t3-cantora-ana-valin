import { AppService } from './../../service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hasLogin: boolean = false;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

  logout(){
    this.service.logout()
  }

}
