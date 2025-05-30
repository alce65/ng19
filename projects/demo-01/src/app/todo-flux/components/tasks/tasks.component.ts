import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskDTO } from '../../types/task';
import { TaskCreateComponent } from '../task-create/task-create.component';
import { StateService } from '../../store/state.service';

import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ine-tasks-flux',
  imports: [TaskItemComponent, TaskCreateComponent, AsyncPipe],
  template: `
    @let tasks = (tasks$ | async)!;
    <h2>Tareas Flux</h2>
    <details class="add-task-flux" #detail>
      <summary>Añadir una tarea</summary>
      <ine-task-create-flux (createTask)="createTask($event)" />
    </details>
    <div class="task-list-flux">
      @if (tasks.length === 0) {
        <p>No hay tareas disponibles.</p>
      } @else {
        @for (task of tasks; track task.id) {
          <ine-task-item-flux [task]="task"></ine-task-item-flux>
        }
      }
    </div>
  `,
  styles: `
    .add-task {
      margin-bottom: 1rem;
      padding: 1rem;
      background-color: #f0f0f0;
      border-radius: 5px;
    }
    .task-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      padding: 1rem;
      background-color: #f9f9f9;
    }
  `,
})
export class TasksComponent implements OnInit, OnDestroy {
  @ViewChild('detail') detailsElement!: ElementRef<HTMLDetailsElement>;
  state = inject(StateService);
  tasks$ = this.state.tasks$;
  //subscription!: Subscription;

  ngOnInit(): void {
    // this.subscription = this.state.tasks$.subscribe((tasks) => {
    //   this.tasks = tasks;
    // });
    console.log('Subscribed to tasks');
    // this.state.loadTasks();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    console.log('Unsubscribed from tasks');
  }

  private closeDetails() {
    // Cerrar el details
    //const detailsElement = document.querySelector('details.add-task');
    const detailsElement = this.detailsElement.nativeElement;
    if (detailsElement) {
      detailsElement.removeAttribute('open');
    }
  }

  createTask($event: TaskDTO) {
    this.state.createTask($event);
    this.closeDetails();
  }
}
