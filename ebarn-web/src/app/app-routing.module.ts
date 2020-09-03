import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TractorModule } from '../app/models/tractor/tractor.module';

const routes: Routes = [
  {
    path: 'tractor',
    loadChildren: () => TractorModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
