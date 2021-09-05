import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSearchComponent } from './home-search.component';

const routes: Routes = [{ path: '', component: HomeSearchComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeSearchRoutingModule {
  static components = [HomeSearchComponent];
}
