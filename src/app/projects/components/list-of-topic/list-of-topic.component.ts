import { Component, Input } from '@angular/core';
import { ITopicsListed, ICards } from './../../interface/project.interface';

@Component({
  selector: 'app-list-of-topic',
  templateUrl: './list-of-topic.component.html',
  styleUrls: ['./list-of-topic.component.scss'],
})
export class ListOfTopicComponent {
  @Input() topicsListed: ITopicsListed[] | any;
  @Input() cards: ICards[] | undefined;
  constructor() {}
}
