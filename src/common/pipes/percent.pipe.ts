import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {

  transform(value: string): string {
    return parseFloat(value) * 100 + '%';
  }

}
