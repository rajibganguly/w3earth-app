import { Component, Input, OnInit } from '@angular/core';
import { ITechnologyDetails } from './../../dashboard/dashboard.model'
import { DASHBOARD_TECHNICAL_TITLE } from 'src/app/constant';

@Component({
  selector: 'app-tecnology-tab',
  templateUrl: './tecnology-tab.component.html',
  styleUrls: ['./tecnology-tab.component.scss'],
})
export class TecnologyTabComponent {
  title = DASHBOARD_TECHNICAL_TITLE;
  @Input() techDetails: ITechnologyDetails[] | any;



  constructor() {
  }


}


