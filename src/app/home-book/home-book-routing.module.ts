import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeBookComponent } from './home-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksAlsoLikeComponent } from './books-also-like/books-also-like.component';

const routes: Routes = [{ path: '', component: HomeBookComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeBookRoutingModule {
  static components = [HomeBookComponent, BookDetailsComponent, BooksAlsoLikeComponent];
}
