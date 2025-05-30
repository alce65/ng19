import { Component, inject } from '@angular/core';
import { StateService } from '../../../todo-flux/store/state.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ine-badget',
  imports: [AsyncPipe],
  template: `
    <p>
      {{ (tasks$ | async)!.length }}
    </p>
  `,
  styles: ``,
})
export class BadgetComponent {
  state = inject(StateService);
  tasks$ = this.state.tasks$;
}
