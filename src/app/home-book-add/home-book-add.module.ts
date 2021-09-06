import { NgModule } from '@angular/core';
import { HomeBookAddComponent } from './home-book-add.component';
import { HomeBookAddRoutingModule } from './home-book-add-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeBookAddRoutingModule.components],
  imports: [HomeBookAddRoutingModule, SharedModule, CommonModule, ReactiveFormsModule],
  exports: [HomeBookAddComponent],
})
export class HomeBookAddModule {}
