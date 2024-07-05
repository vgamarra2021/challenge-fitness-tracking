import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-ui',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  @Input() formGroup!: FormGroup;
  isValid(inputName: string) {
    return (
      (this.formGroup.get(inputName)?.dirty ||
        this.formGroup.get(inputName)?.touched) &&
      this.formGroup.get(inputName)?.errors
    );
  }
}
