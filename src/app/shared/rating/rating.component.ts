import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;
  color: string = 'primary';
  starCount: number = 5;
  @Output() ratingChanged = new EventEmitter();

  ratingArray: number[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.starCount; i++) {
      this.ratingArray.push(i);
    }
  }

  onClick(rating: number) {
    this.rating = rating;
    this.color = 'warn';
    this.ratingChanged.emit(rating);
    return false;
  }

  iconType(i: number) {
    return this.rating >= i + 1 ? 'star' : 'star_border';
  }
}
