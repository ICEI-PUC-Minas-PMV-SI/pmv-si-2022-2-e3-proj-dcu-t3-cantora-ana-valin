import { Component, OnInit } from '@angular/core';
import { CentralFas } from 'src/app/shared/models/centralFas.model';
import { AppService } from 'src/app/shared/service/app.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-central-de-fas',
  templateUrl: './central-de-fas.component.html',
  styleUrls: ['./central-de-fas.component.css']
})
export class CentralDeFasComponent implements OnInit {
  hasLogin: boolean = false;
  fas!: CentralFas[];
  fileName = 'ExcelFile.xlsx';
  constructor(private service: AppService) { }

  ngOnInit() {
  this.getFas()

    this.service.hasLogin.subscribe(
      value => value == true? this.hasLogin = true : this.hasLogin = false
    )
  }

  addFa(email: string, nome: string, cel: string) {
    let fa = {email: email, nome: nome ,id: '', cel: cel}
    this.service.addFa(fa).subscribe( () => fa)
  }

  getFas() {
    this.service.getFa().subscribe( fas => this.fas = fas)
  }

  exportexcel(): void {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }
}
