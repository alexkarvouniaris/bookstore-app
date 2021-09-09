import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ToYearPipe } from './pipes/to-year.pipe';



@NgModule({
  declarations: [
    ToYearPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModule, ToYearPipe
  ]
})
export class SharedModule { }
