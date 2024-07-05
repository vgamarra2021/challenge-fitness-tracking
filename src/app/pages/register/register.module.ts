import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterContainer } from './register.container';
import { PrimaryButtonComponent } from 'src/app/shared/primary-button/primary-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, RegisterContainer],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    PrimaryButtonComponent,
  ],
})
export class RegisterModule {}
