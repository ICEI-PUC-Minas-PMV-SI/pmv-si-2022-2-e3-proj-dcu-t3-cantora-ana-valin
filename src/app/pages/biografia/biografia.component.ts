import { Biografia } from './../../shared/models/biografia.model';
import { AppService } from './../../shared/service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.css']
})
export class BiografiaComponent implements OnInit {
  biografia!: Biografia[];
  hasLogin: boolean = false;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getBiografia().subscribe(
      bio =>   this.biografia = bio
    )

    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

}
