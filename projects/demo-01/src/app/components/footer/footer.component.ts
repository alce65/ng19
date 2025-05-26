import { Component } from '@angular/core';

@Component({
  selector: 'ine-footer',
  imports: [],
  template: `
    <address>
      <p>© 2024 {{ owner }}. All rights reserved.</p>
      <p>
        Contact: <a href="mailto:{{ mail }}">{{ mail }}</a>
      </p>
    </address>
  `,
  styles: ``,
})
export class FooterComponent {
  owner = 'Alejandro Cerezo';
  mail = 'alce65@hotmail.es';
}
