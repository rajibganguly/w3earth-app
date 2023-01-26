import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from './../../data-service.service';

@Component({
  selector: 'app-advice-api',
  templateUrl: './advice-api.component.html',
  styleUrls: ['./advice-api.component.scss']
})
export class AdviceAPIComponent implements OnInit {
  public userDetails: any | undefined;
  public data: any | undefined;


  companyName= '';
  region = ''



  constructor(
    private service: DataService
    ) { }

  ngOnInit() {
    this.service.rapidAPIYahooFin(this.companyName, this.region).subscribe((data) => {
      if(data) {
        this.data = data;
        this.userDetails = this.data.news;
      }
    })
  }

  async nextProfile() {
    await this.service.rapidAPIYahooFin(this.companyName, this.region).subscribe((data) => {
      if(
        this.companyName !== null &&
        this.companyName !== '' &&
        this.region !== '' &&
        this.region !== null
        ) {
          if(data) {
            this.data = {};
            this.userDetails = [];
            this.companyName= '';
            this.region = ''
            this.data = data;
            this.userDetails = this.data.news;
            this.forImages(this.userDetails);
          }
        }
        scrollTo({top: 10});
    })

  }

// Creating Noimage for those no image present in database
  private forImages(arr: any[]) {
    const noImage = environment.noImg;
    const photoObj = {
      resolutions: [
        {
          url: noImage
        }
      ]
    }
    arr.filter((filt) => {
      if(!filt.thumbnail) {
        filt.thumbnail = photoObj;
      }
    })
  }





}
