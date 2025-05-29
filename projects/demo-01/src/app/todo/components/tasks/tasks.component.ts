import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';

import { TaskItemComponent } from '../task-item/task-item.component';
import { Task, TaskDTO } from '../../types/task';

import { TaskCreateComponent } from '../task-create/task-create.component';
import { InMemoryRxRepositoryService } from '../../services/in-memory-rx-repository.service';

@Component({
  selector: 'ine-tasks',
  imports: [TaskItemComponent, TaskCreateComponent],
  template: `<h2>Tareas</h2>
    <details class="add-task" #detail>
      <summary>Añadir una tarea</summary>
      <ine-task-create (createTask)="createTask($event)" />
    </details>
    <div class="task-list">
      @if (tasks.length === 0) {
        <p>No hay tareas disponibles.</p>
      } @else {
        @for (task of tasks; track task.id) {
          <ine-task-item
            [task]="task"
            (deleteTask)="deleteTask($event)"
            (toggleTask)="updateTask($event)"
          ></ine-task-item>
        }
      }
    </div> `,
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
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  @ViewChild('detail') detailsElement!: ElementRef<HTMLDetailsElement>;

  repo = inject(InMemoryRxRepositoryService);

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.repo.getAll().subscribe((tasks) => {
      this.tasks = tasks;
      console.log('Component', this.tasks);
      console.log('Repo', this.repo.items);
    });
  }

  private closeDetails() {
    // Cerrar el details
    //const detailsElement = document.querySelector('details.add-task');
    const detailsElement = this.detailsElement.nativeElement;
    if (detailsElement) {
      detailsElement.removeAttribute('open');
    }
  }

  createTask(dataTask: TaskDTO) {
    // asincrono: Repositorio

    this.repo.add(dataTask).subscribe((task) => {
      if (task.length === 0) {
        console.error('Error al crear la tarea');
      } else {
        // sincrono: Componente (State) de form no optimista
        this.tasks.push(task[0]);
      }

      this.closeDetails();
      console.log('Component', this.tasks);
      console.log('Repo', this.repo.items);
    });
  }

  deleteTask(taskId: Task['id']) {
    this.repo.delete(taskId).subscribe({
      next: (deletedTasks) => {
        if (deletedTasks.length === 0) {
          console.error('Error al crear la tarea');
          return;
        }
        this.tasks = this.tasks.filter(
          (task) => task.id !== deletedTasks[0].id,
        );
      },
      complete: () => {
        console.log('Component', this.tasks);
        console.log('Repo', this.repo.items);
      },
    });
  }

  updateTask(task: Task) {
    const { id, ...data } = task;
    this.repo.update(id, data).subscribe({
      next: (updatedTasks) => {
        if (updatedTasks.length === 0) {
          console.error('Error al actualizar la tarea');
          return;
        }
        // sincrono: Componente (State) de form no optimista
        const index = this.tasks.findIndex((t) => t.id === id);
        if (index !== -1) {
          this.tasks[index] = updatedTasks[0];
        }
      },
      complete: () => {
        console.log('Component', this.tasks);
        console.log('Repo', this.repo.items);
      },
    });
  }
}
