import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ReportsContainer } from './reports.container';
import { FitnessLayoutComponent } from 'src/app/layouts/fitness-layout/fitness-layout.component';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [ReportsComponent, ReportsContainer],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FitnessLayoutComponent,
    TableModule,
    ChartModule,
  ],
})
export class ReportsModule {}
