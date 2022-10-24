import { Component } from '@angular/core';
import { HEADER } from './../constant';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  header = HEADER;
  constructor() {

   }

}
