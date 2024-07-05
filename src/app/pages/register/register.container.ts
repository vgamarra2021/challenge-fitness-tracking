import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-container',
  templateUrl: './register.container.html',
  styles: [
    `
      :host {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class RegisterContainer {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
  }

  onSignUp() {}
}
