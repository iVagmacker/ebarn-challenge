import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TractorListComponent } from './tractor-list/tractor-list.component';
import { TractorFormComponent } from './tractor-form/tractor-form.component';

const routes: Routes = [
  { path: '', component: TractorListComponent },
  { path: 'novo', component: TractorFormComponent },
  { path: 'editar/:id', component: TractorFormComponent },
  { path: 'visualizar/:id', component: TractorFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TractorRoutingModule {}
