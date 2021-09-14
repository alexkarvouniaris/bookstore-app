import { Injectable } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SorterService {
  sort(collection: IBook[], prop: string) {
    switch (prop) {
      case 'rating':
        return collection.sort((a: IBook, b: IBook) => b.rating - a.rating);
      default:
        return collection.sort((a: IBook, b: IBook) => {
          var titleA = a.title.toUpperCase();
          var titleB = b.title.toUpperCase();
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0;
        });
    }
  }
}
