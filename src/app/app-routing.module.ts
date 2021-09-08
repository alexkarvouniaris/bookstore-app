import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home/search' },
  {
    path: 'home/search',
    loadChildren: () =>
      import('./home-search/home-search.module').then(
        (m) => m.HomeSearchModule
      ),
  },
  {
    path: 'home/book/add',
    loadChildren: () =>
      import('./home-book-add/home-book-add.module').then(
        (m) => m.HomeBookAddModule
      ),
  },
  {
    path: 'home/search/:isbn',
    data: { preload: true },
    loadChildren: () =>
      import('./home-book/home-book.module').then((m) => m.HomeBookModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
