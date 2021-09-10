import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { IBook } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-books-also-like',
  templateUrl: './books-also-like.component.html',
  styleUrls: ['./books-also-like.component.scss'],
})
export class BooksAlsoLikeComponent implements OnInit {
  @Input() book!: IBook;
  relatedBooks!: IBook[];

  constructor(
    private dataService: DataService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataService
      .getRelatedBooks(this.book.categories, this.book.isbn)
      .subscribe((res) => {
        console.log('Here: ', res);
        this.relatedBooks = this.mergeArrays(...res);
      });
  }

  mergeArrays(...arrays: Array<IBook[]>) {
    let jointArray: IBook[] = [];

    arrays.forEach((array: IBook[]) => {
      jointArray = [...jointArray, ...array];
    });
    console.log('MERGED: ', [...new Set([...jointArray])]);

    return [...new Set([...jointArray])];
  }
}
