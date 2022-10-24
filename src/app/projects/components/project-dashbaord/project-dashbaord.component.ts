import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-service.service';
import { ITopicsListed, ICards } from '../../interface/project.interface';

@Component({
  selector: 'app-project-dashbaord',
  templateUrl: './project-dashbaord.component.html',
  styleUrls: ['./project-dashbaord.component.scss']
})
export class ProjectDashbaordComponent implements OnInit {
  isLinear = false;
  topicsListed: ITopicsListed[] | any;
  cards: any = [];
  companiesAll: any[] = [];
  techDetails: ITechnologyDetails[] | any;

  constructor(private dservice: DataService) {
    this.techDetails = [
      {
        label: 'barclays',
        value: 'dfvdfvdfvdfvdfvdfvdvvdfv'
      }
    ]

  }

  ngOnInit(): void {
    this.dservice.projectsAllDetails().subscribe((res: any) => {
      this.topicsListed = res;
    })

    this.dservice.companiesAll().subscribe((res: any) => {
      this.companiesAll = [...res];
      console.log('companiesAll ==>', this.companiesAll[0]);
      return this.companiesAll;
    })
  }

}

export interface ITechnologyDetails {
  value: string;
  label?: string;
  description?: string;
  image?: string;
}

