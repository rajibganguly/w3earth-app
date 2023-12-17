import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.scss']
})
export class MyservicesComponent implements OnInit {

  constructor(private _gaService: GoogleAnalyticsService) { }

  ngOnInit(): void {
    this._gaService.pageView('/services', 'Services page')
  }

}
