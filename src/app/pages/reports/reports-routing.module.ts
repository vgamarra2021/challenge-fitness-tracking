import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsContainer } from './reports.container';

const routes: Routes = [
  {
    path: '',
    component: ReportsContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
