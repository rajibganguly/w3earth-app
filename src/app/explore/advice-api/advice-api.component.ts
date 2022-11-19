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


  companyName= '';
  region = ''



  constructor(
    private service: DataService
    ) { }

  ngOnInit() {
    this.service.rapidAPIYahooFin(this.companyName, this.region).subscribe((data) => {
      this.data = data;
      this.userDetails = this.data.news;
    })
  }

  nextProfile() {
    this.service.rapidAPIYahooFin(this.companyName, this.region).subscribe((data) => {
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
    const noImage = 'https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg';
    const photoObj = {
      resolutions: [
        {
          url: noImage
        }
      ]
    }
    arr.filter((filt) => {
      if(filt.thumbnail) {
        filt['thumbnail'] = photoObj;
      }
    })
  }





}
