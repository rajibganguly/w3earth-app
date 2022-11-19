import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  enviroment = environment;
  // nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=qXeYm0FuI4ybQ2jYXzcdbj6nXzdvaKMCmeHZLn88';

  constructor(private http: HttpClient) {
    console.log('212', environment.production);
    if (isDevMode()) {
      console.log('1', 'Dev');
    } else {
      console.log('2', 'prod');
    }
  }

  // Technical details mentioned in Dashboarrd
  dashbaordTechnical(): any {
    return this.http.get(this.enviroment.dashboardTechnical);
  }

  // Dashboard page Cards details on top
  dashbaordcards(): any {
    return this.http.get(this.enviroment.dashboardCardDetails);
  }

  // Dashboard page Cards details on top
  introDataBanner(): Observable<IIntroData> {
    return this.http.get<IIntroData>(this.enviroment.introDetails);
  }

  //projectsDetails
  projectsAllDetails(): any {
    return this.http.get(this.enviroment.projectsDetails);
  }

  //companies - Barclays  HOW to get result out array and push into object
  companiesAll(): any {
    const companyData = forkJoin(
      ajax.getJSON(this.enviroment.companies.barclays),
      ajax.getJSON(this.enviroment.companies.hsbc),
      ajax.getJSON(this.enviroment.companies.firmenich)
    );
    return companyData;
  }



  private CreateNewArrayOfCompanies(obj: object) {
    return Object.keys(obj);
  }


  //NASA service
  getNasaNearEarthObject(stdate: string, enddate: string) {
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${stdate}&end_date=${enddate}&api_key=${environment.keys}`;
    return this.http.get(url);
  }

  // Astrology
  astroService(str: string) {
    const url = `https://aztro.sameerkumar.website?sign=${str}&day=today`;
    return this.http.post(url, {})
  }

  //FakeAPI Call
  rapidAPIYahooFin(companyName: string, region: string) {
    const paramCompanyName = companyName;
    const paramRegion = region;
    const url = `https://yh-finance.p.rapidapi.com/auto-complete?q=${companyName}&region=${region}`;
    const headers = {
      'X-RapidAPI-Key': 'f1e0db20e1msh39bd11326d3021cp1fb9b7jsna317b321434a',
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    }

    return this.http.get(url, {headers: headers});
    // const url = 'https://randomuser.me/api/';
    // return this.http.get(url);

  }

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
