import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data-service.service';

@Component({
  selector: 'app-advice-api',
  templateUrl: './advice-api.component.html',
  styleUrls: ['./advice-api.component.scss']
})
export class AdviceAPIComponent implements OnInit {
  public userDetails: any | undefined;
  public data: any | undefined;




  constructor(
    private service: DataService
    ) { }

  ngOnInit() {
    this.service.fakeApis().subscribe((data) => {
      this.data = data;
      this.userDetails = this.data.results;
    })
  }

  nextProfile() {
    this.service.fakeApis().subscribe((data) => {
      this.data = data;
      this.userDetails = this.data.results;
      console.log(this.userDetails)
    })
  }





}
