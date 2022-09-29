import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe',
})
export class PhonePipePipe implements PipeTransform {
  transform(number: String): String {
    let newStr = '';
    let i = 0;
    number = number.charAt(0) !== '0' ? '0' + number : '' + number;

    for (; i < Math.floor(number.length / 2) - 1; i++) {
      newStr = newStr + number.substring(i * 2, 2) + '-';
    }

    return newStr + number.substring(i * 2);
  }
}
