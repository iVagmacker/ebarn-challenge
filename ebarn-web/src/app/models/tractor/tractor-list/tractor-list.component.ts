import { Component, OnInit } from '@angular/core';
import { Tractor } from '../tractor';
import { TractorService } from '../tractor.service';

@Component({
  selector: 'app-tractor-list',
  templateUrl: './tractor-list.component.html',
  styleUrls: ['./tractor-list.component.css'],
})
export class TractorListComponent implements OnInit {
  public tractors: Array<Tractor> = [];

  constructor(private tractorService: TractorService) {}

  ngOnInit() {
    this.tractorService
      .findAll()
      .subscribe((response) => (this.tractors = response));
  }

  public async onDelete(id: string, index: any): Promise<void> {
    this.tractorService.remover(id).subscribe((response) => {
      response = this.tractors.splice(index, 1);
    });
  }
}
