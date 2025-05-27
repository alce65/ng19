import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ine-counter',
  imports: [],
  template: `
    <h2>Counter Component {{ index }}</h2>
    <p>
      Counter:
      <span [class.negative]="count < 0">{{ count }}</span>
    </p>
    <button (click)="change(1)" [disabled]="count >= 5">Increment</button>
    <button (click)="change(-1)" [disabled]="count <= -5">Decrement</button>
    <button (click)="reset()">Reset</button>

    @if (count === 5) {
      <p>El valor del contador no puede ser mayor que 5</p>
    }
    @if (count === -5) {
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
  @Input({ required: true }) index!: number;

  @Output() makeClick = new EventEmitter<void>();

  count = 0;

  change(value: number) {
    if (this.count === 5 && value > 0) return;
    if (this.count === -5 && value < 0) return;
    this.count += value;
    this.makeClick.emit();
  }

  reset() {
    this.count = 0;
  }
}
