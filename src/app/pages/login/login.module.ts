import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginContainer } from './login.container';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { PrimaryButtonComponent } from 'src/app/shared/primary-button/primary-button.component';

@NgModule({
  declarations: [LoginContainer, LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    CheckboxModule,
    PrimaryButtonComponent,
  ],
  exports: [LoginContainer],
})
export class LoginModule {}
