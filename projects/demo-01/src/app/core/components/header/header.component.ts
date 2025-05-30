import { Component, Input } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TimeService } from '../../services/time.service';
import { BadgetComponent } from "../badget/badget.component";

@Component({
  selector: 'ine-header',
  imports: [LogoComponent, BadgetComponent],
  template: `
    <header>
      <h1><ine-logo /> {{ title }}
      <ine-badget />
      </h1>
      <p>Curso de Angular Mayo 2025</p>
      <p>{{ts.getTime()}}</p>
      <ng-content></ng-content>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() title = 'Demo';
  ts: TimeService
  constructor(ts: TimeService) {
    this.ts = ts;
  }
}

// const c = new HeaderComponent();
// c.title

// <ine-header>
