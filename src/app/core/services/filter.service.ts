import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor() {}

  filter<T>(items: T[], data: string, props: string[]) {
    return items.filter((item: any) => {
      let match = false;
      for (const prop of props) {
        if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
          match = true;
          break;
        }
      }
      return match;
    });
  }
}
