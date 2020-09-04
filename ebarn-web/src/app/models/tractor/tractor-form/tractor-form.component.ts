import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Tractor } from '../tractor';
import { TractorService } from '../tractor.service';

@Component({
  selector: 'app-tractor-form',
  templateUrl: './tractor-form.component.html',
  styleUrls: ['./tractor-form.component.css'],
})
export class TractorFormComponent implements OnInit {
  tractors: Tractor;

  tractorForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public tractorService: TractorService
  ) {}

  ngOnInit(): void {
    this.tractors = new Tractor();

    this.tractors.id = this.route.snapshot.params['id'];

    this.initForm();
    this.find();
  }

  private initForm(): void {
    this.tractorForm = this.formBuilder.group({
      id: '',
      name: ['', [Validators.required]],
      avatar: [''],
    });
  }

  private find() {
    if (this.tractors.id) {
      this.tractorService.findById(this.tractors.id).subscribe((tractor) => {
        this.tractorForm.patchValue(tractor);
      });
    }
  }

  public onSave(): void {
    if (this.tractorForm.valid) {
      if (this.tractors.id) {
        this.tractorService.atualizar(this.tractors.id).subscribe(() => {
          this.router.navigate(['/tractor']);
        });
      } else {
        this.tractorService.salvar(this.tractorForm.value).subscribe(() => {
          this.router.navigate(['/tractor']);
        });
      }
    }
  }
}
