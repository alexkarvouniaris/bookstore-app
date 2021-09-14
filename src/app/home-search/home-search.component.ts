import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { FilterService } from '../core/services/filter.service';
import { SorterService } from '../core/services/sorter.service';
import { IBook } from '../shared/interfaces';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss'],
})
export class HomeSearchComponent implements OnInit {
  books: IBook[] = [];
  filteredBooks: IBook[] = [];

  constructor(
    private dataService: DataService,
    private filterService: FilterService,
    private sorterService: SorterService
  ) {}

  ngOnInit(): void {
    // If data get larger we should consider getting paginated results here
    this.getBooks();
  }

  getBooks() {
    this.dataService.getBooks().subscribe(
      (response) => {
        this.books = response;
        this.filteredBooks = response;
      }
      //handle error if response comes from external api
    );
  }

  filterChanged(data: string) {
    if (data) {
      data = data.toUpperCase();
      const props = ['title', 'categories', 'published', 'publisher', 'author'];
      this.filteredBooks = this.filterService.filter(this.books, data, props);
    } else {
      this.filteredBooks = this.books;
    }
  }

  sort(prop: string) {
    this.filteredBooks = this.sorterService.sort(this.filteredBooks, prop);
  }
}
