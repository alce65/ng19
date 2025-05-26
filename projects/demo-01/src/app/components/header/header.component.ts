import { Component } from '@angular/core';

@Component({
  selector: 'ine-header',
  imports: [],
  template: `
    <header>
      <h1>{{ title }}</h1>
      <p>Curso de Angular Mayo 2025</p>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'Demo ng19';
}
