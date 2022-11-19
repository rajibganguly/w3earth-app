import { Component, Input, OnInit } from '@angular/core';
import { ITechnologyDetails } from './../../dashboard/dashboard.model'

@Component({
  selector: 'app-tecnology-tab',
  templateUrl: './tecnology-tab.component.html',
  styleUrls: ['./tecnology-tab.component.scss'],
})
export class TecnologyTabComponent {
  title = 'Technical';
  @Input() techDetails: ITechnologyDetails[] | any;



  constructor() {
  }


}


