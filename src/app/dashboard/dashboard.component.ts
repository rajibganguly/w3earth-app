import { Component, ElementRef, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA, OnDestroy } from '@angular/core';
import { map, pipe } from 'rxjs';
import { CONTACTTITLE, DASHBOARD_TITLE, DASHBOARD_TITLE2 } from '../constant';

import { DataService } from '../data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  cardsDetailsInDashboard: ICardsDetailsInDashboard[] | any;
  techDetails: ITechnologyDetails[] = [];
  canvasboarddata: IIntroData[] = [];

  title = CONTACTTITLE;
  pageTitleHello: string = DASHBOARD_TITLE2;
  pageTitle: string = DASHBOARD_TITLE;
  blockqotetxt = `<p>Only you can allow yourself to explore the person in the mirror. Only you can coax yourself into a daring adventure to find your untapped potential.
  <br><q> ~ Vironika Tugaleva, The Art of Talking to Yourself</q>
</p>`;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getBannerCanvas();
    this.dataService.dashbaordTechnical().subscribe((res: any) => {
      this.techDetails = res[0].data;
    });
    this.dataService.dashbaordcards().subscribe((res: any) => {
      this.cardsDetailsInDashboard = res;
    })
  }

  private getBannerCanvas(): any[] {
    let localData = [];
    this.dataService.introDataBanner().subscribe((res: any) => {
      this.canvasboarddata = res;
      //this.canvasboarddata.map()
      //Math.round(Math.random()*100);
      console.log(11, res, this.canvasboarddata)
    })
    return this.canvasboarddata;
  }


  private iterateFromArray(arr: any[], emptyArry: any[]) {
    arr.forEach(ele => {
      pipe((ele) => {
        map(arr => emptyArry.push(arr))
      })
    })
  }

  ngOnDestroy(): void {

  }


}


export interface ICardsDetailsInDashboard {
  title: string,
  description: string,
  imagePath: string,
  nameOfAuthor: string
}

export interface ITechnologyDetails {
  value: string;
  label?: string;
  description?: string;
  image?: string;
}

export interface IIntroData {
  idTitle: string;
  backgroundColor?: string;
  size?: string;
  color?: string;
  xCordinate?: string;
  yCordinate?: string;
  title:  string;
  textColor?: string;
  textSize?:  string;
  yCordinateHover?: string;
}
