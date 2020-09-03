import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent implements OnInit {
  @Input() label: string;

  @Input() required: boolean;

  @ContentChild(FormControlName) input: FormControlName;

  constructor() {}

  ngOnInit() {}

  public isRequired() {
    return this.required ? true : false;
  }

  public hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  public hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

  public optionClass() {
    return {
      'has-error': this.hasError(),
      'has-success': this.hasSuccess(),
    };
  }
}
