import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-myprocess',
  templateUrl: './myprocess.component.html',
  styleUrls: ['./myprocess.component.scss']
})
export class MyprocessComponent implements OnInit {

  constructor(private _gaService: GoogleAnalyticsService) { }

  ngOnInit(): void {
    this._gaService.pageView('/process', 'Process page')
  }

}
