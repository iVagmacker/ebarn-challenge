import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractService {
  private baseUrl: string;

  private params: any;

  private headers = new Headers({
    'Content-Type': 'application/json; charset=UTF-8',
  });

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  protected getUrl(relativeUrl?: string): string {
    let absoluteUrl = environment.API_URL + this.baseUrl;

    if (absoluteUrl !== null && relativeUrl !== undefined) {
      absoluteUrl += relativeUrl;
    }

    return absoluteUrl;
  }

  protected getHeaders(): any {
    return { headers: this.headers };
  }

  protected getParam(nameParam: string, valueParam: any): any {
    const params: HttpParams = new HttpParams().set(nameParam, valueParam);

    return { params };
  }
}
