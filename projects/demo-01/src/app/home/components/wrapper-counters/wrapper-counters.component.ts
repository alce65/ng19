import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'ine-wrapper-counters',
  imports: [CounterComponent],
  template: `
    <h2>Total Clicks {{clicks}}</h2>
    <h2>Total Value {{ total.reduce(calc) }}</h2>
    <p>Ejemplo de componente con cambio de estados</p>
    <ine-counter [index]="1" (makeClick)="addClick($event, 0)"/>
    <ine-counter [index]="2" (makeClick)="addClick($event, 1)"/>
  `,
  styles: ``,
})
export class WrapperCountersComponent {
  clicks = 0
  total = [0,0]
  calc =  (a: number,b: number) => a+b

  addClick(value: number, index: number) {
    this.clicks++;
    this.total[index] = value;
  }
}
