import { Component } from '@angular/core';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'ine-todo',
  imports: [TasksComponent],
  template: ` <ine-tasks-flux></ine-tasks-flux> `,
  styles: ``,
})
export default class TodoFluxComponent {}
