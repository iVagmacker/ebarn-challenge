import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tractor } from './tractor';
import { CrudService } from 'src/app/shared/service/crud.service';

@Injectable({
  providedIn: 'root',
})
export class TractorService extends CrudService<Tractor> {
  constructor(public httpClient: HttpClient) {
    super(httpClient, 'tractor');
  }
}
