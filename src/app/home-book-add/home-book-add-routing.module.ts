import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBookAddComponent } from './home-book-add.component';

const routes: Routes = [{ path: '', component: HomeBookAddComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeBookAddRoutingModule {
  static components = [HomeBookAddComponent];
}
