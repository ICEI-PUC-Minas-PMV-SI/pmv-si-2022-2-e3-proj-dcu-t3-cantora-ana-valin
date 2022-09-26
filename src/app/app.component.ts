import { Component } from '@angular/core';
import 'tw-elements';
@Component({
  selector: 'app-root',
  template: '<app-header></app-header><router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-Ana-Valin';
}

