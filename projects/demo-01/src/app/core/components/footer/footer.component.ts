import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ine-footer',
  imports: [DatePipe],
  template: `
    <address>
      <p>{{date | date:'fullDate'}} {{ owner }}. All rights reserved.</p>
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
  date = new Date()
}
