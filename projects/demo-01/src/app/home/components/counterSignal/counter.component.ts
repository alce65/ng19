import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'ine-counter-signal',
  imports: [],
  template: `
    <h2>Counter Component {{ index() }}</h2>
    <p>
      Counter:
      <span [class.negative]="count() < 0">{{ count() }}</span>
    </p>
    <<button (click)="change(1)" [disabled]="count() >= 5">Increment</button>
    <button (click)="change(-1)" [disabled]="count() <= -5">Decrement</button>
    <button (click)="reset()">Reset</button>

    @if (count() === 5) {
      <p>El valor del contador no puede ser mayor que 5</p>
    }
    @if (count() === -5) {
      <p>El valor del contador no puede ser menor que -5</p>
    }
  `,
  styles: `
    .negative {
      color: red;
    }
  `,
})
export class CounterComponent {

  index = input.required<number>()
  makeClick = output<number>();
  count = signal(0);

    change(value: number) {
      if (this.count() === 5 && value > 0) return;
      if (this.count() === -5 && value < 0) return;

      this.count.update((current) => current + value);
      this.makeClick.emit(this.count());
    }

    reset() {
      this.count.set(0)
      this.makeClick.emit(this.count());
    }
}
