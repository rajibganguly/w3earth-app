import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectiontwo',
  templateUrl: './sectiontwo.component.html',
  styleUrls: ['./sectiontwo.component.scss']
})

export class SectiontwoComponent {
  clientsLists: IClientsLogo[];
  constructor() {
    this.clientsLists = [
      {
        img: './../../../assets/images/clients-logo/cl1.jpg',
        alt: 'Microsoft',
        designation: 'UX & Azure Development',
        details: 'Azure CosmosDB, Perf Testing, Managing Signal R, Selenium testing & Angular13'
      },
      {
        img: './../../../assets/images/clients-logo/cl2.jpg',
        alt: 'Firmenich',
        designation: 'UX & UI Design',
        details: 'Detail design, LFM/HFM, Sketch(Mac), SCSS, Angular'
      },
      {
        img: './../../../assets/images/clients-logo/cl3.jpg',
        alt: 'HSBC',
        designation: 'Javascript Development',
        details: 'Javascript, Liverpool admin connect, Xls-planning'
      },
      {
        img: './../../../assets/images/clients-logo/cl4.jpg',
        alt: 'Hilton',
        designation: 'UI Development',
        details: 'Photoshop Design and HTML/CSS coding and jQuery'
      },
      {
        img: './../../../assets/images/clients-logo/cl5.jpg',
        alt: 'BCBS',
        designation: 'UX UI',
        details: 'Flash and HTML, Adobe XD, Photoshop, CSS with jquery'
      },
      {
        img: './../../../assets/images/clients-logo/cl6.jpg',
        alt: 'Walters kluwer',
        designation: 'UI coding Development',
        details: 'Kendo UI with javascript, UI libraries built natively and Chart'
      },
      {
        img: './../../../assets/images/clients-logo/cl7.jpg',
        alt: 'Inkling',
        designation: 'UI Software Development',
        details: 'BEM SASS/SCSS, XML content to Responsive HTML5, Alignment and fixes'
      },
      {
        img: './../../../assets/images/clients-logo/cl8.jpg',
        alt: 'Rockwell',
        designation: 'UX Design & Development',
        details: 'Frontend architecture is a collection of tools and processes, Hybrid app'
      },
      {
        img: './../../../assets/images/clients-logo/cl9.jpg',
        alt: 'Barclays',
        designation: 'UI Development & Support',
        details: 'Angular JS 1.3, SASS/SCSS, color contrast checker, NVDA web accessibility, Section 508'
      },
      {
        img: './../../../assets/images/clients-logo/cl10.jpg',
        alt: 'Canadian National Railways',
        designation: 'UI Development & Cloud services',
        details: 'Angular, NgRX, RXJS, Material Angular, bootstrap, Kinvey serverless application development platform'
      },
      {
        img: './../../../assets/images/clients-logo/cl11.jpg',
        alt: 'Mc.Graw Hill',
        designation: 'Software Development',
        details: 'HTML CSS, Wordpress, Joomla, Illustrator, Balsamiq, website'
      }
    ]
  }



}

export interface IClientsLogo {
  img: string,
  alt: string,
  designation: string,
  details: string
}
