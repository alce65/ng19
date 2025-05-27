import { Component, OnDestroy, OnInit } from '@angular/core';
import { GreetingComponent } from "./components/greeting/greeting.component";
import { WrapperCountersComponent } from "./components/wrapper-counters/wrapper-counters.component";

@Component({
  selector: 'ine-home',
  imports: [GreetingComponent, WrapperCountersComponent],
  template: `
    <p>Ejemplo de eventos entre componentes</p>
    <ine-wrapper-counters />
    <p>Ejemplo de componente con data binding</p>
    <ine-greeting />
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
