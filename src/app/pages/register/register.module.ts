import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterContainer } from './register.container';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, RegisterContainer],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
})
export class RegisterModule {}
