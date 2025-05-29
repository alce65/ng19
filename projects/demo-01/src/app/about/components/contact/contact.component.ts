import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserDTO } from '../../types.ts/user';

@Component({
  selector: 'ine-contact',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="formGroupContact" (ngSubmit)="handleSubmit()">
      <label>
        Nombre:
        <input type="text" formControlName="name" />
      </label>
      <label>
        Email:
        <input type="email" formControlName="email" />
      </label>
      <label>
        ¿Eres estudiante?
        <input type="checkbox" formControlName="isStudent" />
      </label>
      <label>
        Cursos:
        <select formControlName="course">
          <option value="">Seleccione un curso</option>
          <option value="Angular">Angular</option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
        </select>
      </label>
      <label>
        Turno:
        <select formControlName="turn">
          <option value="">Seleccione un turno</option>
          <option value="mañana">Mañana</option>
          <option value="tarde">Tarde</option>
          <option value="noche">Noche</option>
        </select>
      </label>
      <button type="submit" [disabled]="formGroupContact.invalid">Enviar</button>
    </form>
  `,
  styles: ``,
})
export class ContactComponent {
  formGroupContact = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    isStudent: new FormControl(false),
    course: new FormControl(''),
    turn: new FormControl(''),
  });

  constructor() {
    console.log(this.formGroupContact);
  }

  handleSubmit() {
    const data: UserDTO = this.formGroupContact.value as UserDTO;
    console.log('Form submitted:', data);
  }
}
