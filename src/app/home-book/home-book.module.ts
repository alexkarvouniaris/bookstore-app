import { NgModule } from '@angular/core';
import { HomeBookRoutingModule } from './home-book-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RatingModule } from '../shared/rating/rating.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeBookRoutingModule.components
  ],
  imports: [
    HomeBookRoutingModule, SharedModule, RatingModule, CommonModule
  ]
})
export class HomeBookModule { }
