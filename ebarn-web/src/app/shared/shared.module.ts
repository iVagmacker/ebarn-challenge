import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';

@NgModule({
  declarations: [FieldComponent],
  imports: [NgbModule, CommonModule],
  exports: [CommonModule, ReactiveFormsModule, NgbModule, FieldComponent],
})
export class SharedModule {}
