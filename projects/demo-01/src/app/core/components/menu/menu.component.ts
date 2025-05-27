import { Component } from '@angular/core';
import { menuOptions } from '../../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ine-menu',
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        @for (option of options; track option.label) {
          <li>
            <a [routerLink]="option.path" routerLinkActive="active">{{ option.label }}</a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: `
    nav {
      padding-block: 10px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      display: inline;
      margin-right: 15px;
    }
    a {
      text-decoration: none;
      color:rgb(45, 46, 47);
      transition: color 0.3s;
    }
    a:hover {
      color: #0056b3;
    }
    .active {
      font-weight: bold;
      color: #0056b3;
    }
  `,
})
export class MenuComponent {
  options = menuOptions;
}
