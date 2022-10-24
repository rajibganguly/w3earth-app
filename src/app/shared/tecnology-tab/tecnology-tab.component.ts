import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnology-tab',
  templateUrl: './tecnology-tab.component.html',
  styleUrls: ['./tecnology-tab.component.scss'],
})
export class TecnologyTabComponent implements OnInit {
  title = 'Technical';
  @Input() techDetails: ITechnologyDetails[] | any;



  constructor() {
  }

  ngOnInit(): void {}
}

export interface ITechnologyDetails {
  value: string;
  label?: string;
  description?: string;
  image?: string;
}
