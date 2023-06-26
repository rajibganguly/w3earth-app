import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nasaNumber'
})
export class NasaNumberPipe implements PipeTransform {

  transform(value: number) {

    var digits = value.toString();
    // var s = digits.charAt(0)+digits.charAt(1)
    var s = digits.substring(4, 0);
    var d = Number(s);
    if(d < 15) {
      var formattedPxValue = s + 'px';
      console.log(formattedPxValue);
      return formattedPxValue;
    } else {
      var s = d.toString().substring(2, 0);
      var formattedPxValue = s + 'px';
      console.log(formattedPxValue);
      return formattedPxValue;
    }
  }

}
