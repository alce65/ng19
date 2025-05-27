import { Component, Input } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'ine-header',
  imports: [LogoComponent],
  template: `
    <header>
      <h1><ine-logo /> {{ title }}</h1>
      <p>Curso de Angular Mayo 2025</p>
      <ng-content></ng-content>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() title = 'Demo';
}

// const c = new HeaderComponent();
// c.title

// <ine-header>
