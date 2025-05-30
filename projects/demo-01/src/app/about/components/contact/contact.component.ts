import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
      @if (
        formGroupContact.get('name')?.invalid &&
        formGroupContact.get('name')?.touched
      ) {
        <div>
          @if (formGroupContact.get('name')?.errors?.['required']) {
            <span>El nombre es requerido.</span>
          } @else if (formGroupContact.get('name')?.errors?.['minlength']) {
            <span>El nombre debe tener al menos 3 caracteres.</span>
          }
        </div>
      }
      <label>
        Email:
        <input type="email" formControlName="email" />
      </label>
      @if (
        formGroupContact.get('email')?.invalid &&
        formGroupContact.get('email')?.touched
      ) {
        <div>
          @if (formGroupContact.get('email')?.errors?.['required']) {
            <span>El email es requerido.</span>
          } @else if (formGroupContact.get('email')?.errors?.['email']) {
            <span>El email debe tener el formato correcto.</span>
          }
        </div>
      }
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
      <button type="submit" [disabled]="formGroupContact.invalid">
        Enviar
      </button>
    </form>
  `,
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 400px;
      margin: auto;
    }
  `,
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
