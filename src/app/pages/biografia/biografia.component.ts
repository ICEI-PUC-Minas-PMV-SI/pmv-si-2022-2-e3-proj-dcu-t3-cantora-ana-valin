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
    this.getBio()

    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

  getBio(){
    this.service.getBiografia().subscribe(
      bio =>   this.biografia = bio
    )
  }

  editBio(bio: string){
    this.biografia[0].text = bio;
    this.service.editBiografia(this.biografia[0]).subscribe(() => this.getBio())
  }

}
