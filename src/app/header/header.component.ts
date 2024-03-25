import { Component } from '@angular/core';
import { HEADER, HEADER_MOB } from './../constant';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  header: any = HEADER;
  headerMob: any = HEADER_MOB;
  showMenuFlg: boolean = false;
  constructor() {

   }

   showMenu() {
    this.showMenuFlg = !this.showMenuFlg
   }

}
