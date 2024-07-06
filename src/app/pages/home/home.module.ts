import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { KnobModule } from 'primeng/knob';
import { FitnessLayoutComponent } from 'src/app/layouts/fitness-layout/fitness-layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeContainer } from './home.container';

@NgModule({
  declarations: [HomeComponent, HomeContainer],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FitnessLayoutComponent,
    KnobModule,
    FormsModule,
    DropdownModule,
  ],
  exports: [HomeContainer],
})
export class HomeModule {}
