import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(private _gaService: GoogleAnalyticsService) { }

  ngOnInit(): void {
    this._gaService.pageView('/Explore', 'Explore page')
  }

}
