import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { FitnessLayoutComponent } from 'src/app/layouts/fitness-layout/fitness-layout.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ReportsContainer } from './reports.container';
import { TimeFormatModule } from 'src/app/shared/pipes/time-format/time-format.module';

@NgModule({
  declarations: [ReportsComponent, ReportsContainer],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FitnessLayoutComponent,
    TableModule,
    ChartModule,
    TimeFormatModule,
  ],
})
export class ReportsModule {}
