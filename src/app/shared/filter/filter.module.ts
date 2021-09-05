import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FilterComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [FilterComponent],
})
export class FilterModule {}
