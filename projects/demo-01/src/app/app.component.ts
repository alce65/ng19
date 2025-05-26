import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CounterComponent } from "./components/counter/counter.component";
import { GreetingComponent } from "./components/greeting/greeting.component";

@Component({
  selector: 'ine-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CounterComponent, GreetingComponent],
  template: `
    <ine-header />
    <main class="container">
      <p>Ejemplo de componente con cambio de estados</p>
      <ine-counter />
      <p>Ejemplo de componente con data binding</p>
      <ine-greeting />
      <router-outlet />
    </main>
    <ine-footer />
  `,
  styles: [],
})
export class AppComponent {}
