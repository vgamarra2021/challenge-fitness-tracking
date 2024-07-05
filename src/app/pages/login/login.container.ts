import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styles: [
    `
      :host {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class LoginContainer {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      remember: true,
    });
  }

  onSignIn() {
    console.log(this.formGroup.valid);
    console.log(this.formGroup.validator);
    console.log(this.formGroup.get('email')?.errors);
    if (this.formGroup.valid) console.log(this.formGroup.value);
  }
}
