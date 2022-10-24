import { Component, Input, OnInit } from '@angular/core';
import { ICards } from '../../interface/project.interface'

@Component({
  selector: 'app-card-sample',
  templateUrl: './card-sample.component.html',
  styleUrls: ['./card-sample.component.scss']
})
export class CardSampleComponent  {
  @Input() cards: ICards[] | any;
  constructor() { }

}


