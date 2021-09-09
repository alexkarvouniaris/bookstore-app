import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toYear'
})
export class ToYearPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (!value) return '';
    const date = new Date(value);
    const formattedDate = date.toLocaleString('en-US', {year: 'numeric'});
    return formattedDate
  }

}
