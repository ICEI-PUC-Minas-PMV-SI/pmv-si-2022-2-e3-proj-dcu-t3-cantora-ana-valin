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

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getBiografia().subscribe(
      bio =>   this.biografia = bio
    )
  }

}
