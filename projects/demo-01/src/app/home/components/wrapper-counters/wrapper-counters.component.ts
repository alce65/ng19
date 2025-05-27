import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'ine-wrapper-counters',
  imports: [CounterComponent],
  template: `
    <h2>Total Clicks {{clicks}}</h2>
    <p>Ejemplo de componente con cambio de estados</p>
    <ine-counter [index]="1" (makeClick)="addClick()"/>
    <ine-counter [index]="2" (makeClick)="addClick()"/>
  `,
  styles: ``,
})
export class WrapperCountersComponent {
  clicks = 0

  addClick() {
    this.clicks++;
  }
}
