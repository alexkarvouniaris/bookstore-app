import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { IBook } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book!: IBook;
  categories!: string[];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const isbn = params['isbn'];
      if(isbn){
        this.dataService.getBook(isbn).subscribe((book: IBook) => {
          this.book = book;
          this.categories = book.categories;
        })
      }
    });
  }

  
}
