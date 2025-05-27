import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MenuComponent } from "../menu/menu.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'ine-layout',
  imports: [HeaderComponent, MenuComponent, FooterComponent],
  template: `
    <ine-header [title]="title">
      <ine-menu />
    </ine-header>
    <main class="container">
      <ng-content />
    </main>
    <ine-footer />
  `,
  styles: ``,
})
export class LayoutComponent {
    @Input() title!: string;
}
