import { Component } from '@angular/core';
import { CONTACTTITLE } from 'src/app/constant';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {

  constructor() { }
  title = CONTACTTITLE;

  downloadCV() {
    let text = prompt("Please enter code to download CV:", "");
    if (text == "w3earth" || text == "W3earth" || text == "rg") {
      window.open('./../../../assets/cv/resume.pdf');
    } else {
      window.alert("Please raise request to w3earth@outlook.com for download resume")
    }
  }

}
