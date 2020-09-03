import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tractor } from '../tractor';
import { TractorService } from '../tractor.service';

@Component({
  selector: 'app-tractor-form',
  templateUrl: './tractor-form.component.html',
  styleUrls: ['./tractor-form.component.css'],
})
export class TractorFormComponent implements OnInit {
  public tractors: Tractor;

  public tractorForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private tractorService: TractorService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.tractors = new Tractor();
  }

  private initForm(): void {
    this.tractorForm = this.formBuilder.group({
      id: null,
      name: ['', [Validators.required]],
      avatar: [''],
    });
  }

  public onSave(): void {
    if (this.tractorForm.valid) {
      this.tractorService.salvar(this.tractorForm.value).subscribe(() => {
        this.router.navigate(['/tractor']);
      });
    }
  }
}
