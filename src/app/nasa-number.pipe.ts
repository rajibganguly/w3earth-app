import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nasaNumber'
})
export class NasaNumberPipe implements PipeTransform {

  transform(value: number) {

    var digits = value.toString();
    var s = digits.charAt(0)+digits.charAt(1)
    var formattedPxValue = s + 'px';
    return formattedPxValue;
  }

}
