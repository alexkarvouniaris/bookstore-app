import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { IBook } from '../shared/interfaces';

@Component({
  selector: 'app-home-book',
  templateUrl: './home-book.component.html',
  styleUrls: ['./home-book.component.scss'],
})
export class HomeBookComponent implements OnInit {
  book!: IBook;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const isbn = params['isbn'];
      if (isbn) {
        this.dataService.getBook(isbn).subscribe((book: IBook) => {
          this.book = book;
        });
      }
    });
  }
}
