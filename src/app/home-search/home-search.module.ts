import { NgModule } from '@angular/core';
import { BooksGridComponent } from './books-grid/books-grid.component';
import { HomeSearchRoutingModule } from './home-search-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RatingModule } from '../shared/rating/rating.module';
import { FilterModule } from '../shared/filter/filter.module';

@NgModule({
  declarations: [HomeSearchRoutingModule.components, BooksGridComponent],
  imports: [SharedModule, HomeSearchRoutingModule, CommonModule, RatingModule, FilterModule],
})
export class HomeSearchModule {}
