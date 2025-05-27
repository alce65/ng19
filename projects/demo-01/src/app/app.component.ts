import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

@Component({
  selector: 'ine-root',
  imports: [RouterOutlet, LayoutComponent],
  template: `
    <ine-layout [title]="title" >
      <router-outlet />
    </ine-layout>
  `,
  styles: [],
})
export class AppComponent {
   title = 'Demo ng19';
}
