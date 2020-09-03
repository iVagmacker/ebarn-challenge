import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TractorFormComponent } from './tractor-form/tractor-form.component';
import { TractorListComponent } from './tractor-list/tractor-list.component';
import { TractorRoutingModule } from './tractor-routing.module';

@NgModule({
  declarations: [TractorFormComponent, TractorListComponent],
  imports: [SharedModule, TractorRoutingModule],
})
export class TractorModule {}
