import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ine-greeting',
  imports: [FormsModule],
  template: `
    <h2>Greeting Component</h2>
    <!-- <input type="text" placeholder="Dime tu nombre"
   (input)="changeUser($event)" [value]="user"/> -->
    <input type="text" placeholder="Dime tu nombre" [(ngModel)]="user" />
    <p>Hola {{ user || 'amigo' }}!</p>
    <button (click)="deleteUser()">Borrar</button>
  `,
  styles: ``,
})
export class GreetingComponent {
  user = '';
  deleteUser() {
    this.user = '';
  }

  // changeUser(ev: Event) {
  //   const element = ev.target as HTMLInputElement;
  //   this.user = element.value
  // }
}
