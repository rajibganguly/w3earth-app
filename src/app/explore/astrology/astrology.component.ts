import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from './../../data-service.service';

@Component({
  selector: 'app-astrology',
  templateUrl: './astrology.component.html',
  styleUrls: ['./astrology.component.scss']
})
export class AstrologyComponent implements OnInit {
  @ViewChild('selectRashi', {static: true}) selectRashi!: ElementRef;
  zodac: any[] = [
    {value: 'aries', name: 'Mar 19 - Apr 20'},
    {value: 'taurus', name: 'Apr 19 - May 20'},
    {value: 'gemini', name: 'May 19 - Jun 20'},
    {value: 'cancer', name: 'Jun 19 - Jul 20'},
    {value: 'leo', name: 'Jul 19 - Aug 20'},
    {value: 'virgo', name: 'Aug 19 - Sep 20'},
    {value: 'libra', name: 'Sep 19 - Oct 20'},
    {value: 'scorpio', name: 'Oct 19 - Nov 20'},
    {value: 'sagittarius', name: 'Nov 19 - Dec 20'},
    {value: 'capricorn', name: 'Dec 19 - Jan 20'},
    {value: 'aquarius', name: 'Jan 19 - Feb 20'},
    {value: 'pisces', name: 'Feb 19 - Mar 20'}
  ];
  dataDetails: any;
  homeReturn = true;
  loader = false;
  @ViewChild('firstName', { static: false }) firstName!: ElementRef;
  finding: any;

  constructor(
    private service: DataService
    ) { }

  ngOnInit() {
    console.log('loading')
  }

  myLuckyNumber() {
    const value = this.firstName.nativeElement.value;
    this.service.getLuckyNumber(value).subscribe((data) => {
      console.log(data);
      this.finding = data
    })
  }

  changeSelect() {
    this.homeReturn = false;
    this.loader = true;
    const a = this.selectRashi.nativeElement.value;

    this.service.astroService(a).subscribe(
      (data) => {
        this.dataDetails = data;
        this.loader = false;
      }, (err) => {
        console.log(err)
      }
    )
  }

}
