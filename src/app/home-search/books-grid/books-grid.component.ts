import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.scss']
})
export class BooksGridComponent implements OnInit {
  @Input() books!: IBook[];
  rating!: number;

  constructor() { }

  ngOnInit(): void {
  }

  onRatingChanged(value: any) {
    this.rating = value;
  }

}
