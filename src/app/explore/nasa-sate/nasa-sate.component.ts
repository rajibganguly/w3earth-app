import { Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from './../../data-service.service';

@Component({
  selector: 'app-nasa-sate',
  templateUrl: './nasa-sate.component.html',
  styleUrls: ['./nasa-sate.component.scss']
})


export class NasaSateComponent implements OnInit, OnChanges, OnDestroy {
  startDate: any;
  endDate: any;
  astroidSize: any;
  allResponse: any;
  detailsResponseData: any;
  detailsData: any;
  showDetailsButton: boolean | undefined;
  // public widthObj: string;
  // public heightObj: string;

  @ViewChild('datedd', { static: false }) datedd!: ElementRef;
  @ViewChild ('months', {static: false}) months!: ElementRef;
  @ViewChild ('year', {static: false}) year!: ElementRef;

  constructor(private service: DataService) {
    if(this.startDate !== null && this.endDate !== null) {
      this.showDetailsButton = false;
    }
  }

  ngOnInit() {
  }

  showDetails() {
    this.showDetailsButton = true;
    this.endDate = `${this.year.nativeElement.value}-${this.months.nativeElement.value}-${this.datedd.nativeElement.value}`;
    this.startDate = `${this.year.nativeElement.value}-${this.months.nativeElement.value}-${Number(this.datedd.nativeElement.value) + 7}`;

    this.service.getNasaNearEarthObject(this.startDate, this.endDate).subscribe(
      (res) => {
        //this.astroidSize(null);
        this.detailsResponseData = res;
        this.detailsData = this.detailsResponseData.near_earth_objects;
        this.allResponse = Object.keys(this.detailsData);
        this.showDetailsButton = false;
      }
    )
  }

  // private astroidSize(as: object) {
  //   return `style=width: ${as}em;`;
  //   console.log(as+'px');
  // }


  ngOnChanges() {
    //this.astroidSize(null);

 }


 ngOnDestroy(): void {
  this.detailsResponseData = null;
 }
}
