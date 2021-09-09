import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { IBook } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-books-also-like',
  templateUrl: './books-also-like.component.html',
  styleUrls: ['./books-also-like.component.scss'],
})
export class BooksAlsoLikeComponent implements OnInit {
  @Input() book!: IBook;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getRelatedBooks(this.book.categories, this.book.isbn);    
  }
}
