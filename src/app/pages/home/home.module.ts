import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { KnobModule } from 'primeng/knob';
import { FitnessLayoutComponent } from 'src/app/layouts/fitness-layout/fitness-layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeContainer } from './home.container';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [HomeComponent, HomeContainer],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    FitnessLayoutComponent,
    KnobModule,
    FormsModule,
    DropdownModule,
    ButtonComponent,
    ButtonModule
  ],
  exports: [HomeContainer],
})
export class HomeModule {}
