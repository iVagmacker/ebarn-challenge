import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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

  imagem: any;

  @ViewChild('template') template;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public tractorService: TractorService
  ) {}

  ngOnInit(): void {
    if (this.imagem == undefined || this.tractors.avatar == null) {
      this.imagem = '../../../../assets/image.jpg';
    }

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

  onFileChange(event: any) {
    let reader = new FileReader();
    let size = event.target.files[0].size;
    let type = event.target.files[0].type;
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      console.log(event.target.files[0].name);
      const arquivo = file.name;
      if (
        size > 2097152 ||
        (type != 'image/png' && type != 'image/jpeg' && type != 'image/jpg')
      ) {
        this.template.openModal();
        this.fileInput.nativeElement.value = null;
      } else {
        reader.readAsDataURL(file);
        reader.onload = (event: any) => {
          this.imagem = event.target.result;
          this.tractors.avatar = arquivo;
        };
      }
    }
  }

  carregarImagemAoAlterar(file: any) {
    let reader = new FileReader();
    var contentType = 'image/png';
    var byteCharacters = atob(file.dados);
    // console.log(byteCharacters)
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], { type: contentType });

    reader.readAsDataURL(blob);
    reader.onload = (event: any) => {
      this.imagem = event.target.result;
    };
  }

  excluirImagem() {
    this.tractorForm.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = null;
    this.imagem = '../../../../assets/image.jpg';
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
        this.tractorService.save(this.tractorForm.value).subscribe(() => {
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
