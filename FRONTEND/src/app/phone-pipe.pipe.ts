import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe',
})
export class PhonePipePipe implements PipeTransform {
  transform(number: String): String {
    return (
      '+33 ' +
      number.substring(1, 1) +
      '.' +
      number.substring(2, 2) +
      '.' +
      number.substring(4, 2) +
      '.' +
      number.substring(6, 2) +
      '.' +
      number.substring(8, 2)
    );
  }
}
