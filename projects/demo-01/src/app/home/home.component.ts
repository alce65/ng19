import { Component, OnDestroy, OnInit } from '@angular/core';
import { GreetingComponent } from "./components/greeting/greeting.component";
import { WrapperCountersComponent } from "./components/wrapper-counters/wrapper-counters.component";
import { CounterComponent } from "./components/counterSignal/counter.component";

@Component({
  selector: 'ine-home',
  imports: [GreetingComponent, WrapperCountersComponent, CounterComponent],
  template: `
    <p>Ejemplo de eventos entre componentes</p>
    <ine-wrapper-counters />
    <p>Ejemplo de componente con data binding</p>
    <ine-greeting />
    <ine-counter-signal [index]="23" />
  `,
  styles: ``,
})
export default class HomeComponent implements OnInit, OnDestroy{

  constructor() {
    console.log('HomeComponent constructor called');
  }

  ngOnInit(): void {
    console.log('HomeComponent initialized');
  }
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}
