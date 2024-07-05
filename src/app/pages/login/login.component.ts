import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  @Input() formGroup!: FormGroup;

  isValid(inputName: string) {
    return (
      (this.formGroup.get(inputName)?.dirty ||
        this.formGroup.get(inputName)?.touched) &&
      this.formGroup.get(inputName)?.errors
    );
  }
}
