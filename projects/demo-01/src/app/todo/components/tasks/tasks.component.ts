import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { TaskItemComponent } from '../task-item/task-item.component';
import { Task, TaskDTO } from '../../types/task';
import { getTasks } from '../../data/tasks';
import { TaskCreateComponent } from '../task-create/task-create.component';

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

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      console.log(this.tasks);
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
    const task: Task = {
      id: crypto.randomUUID(),
      isCompleted: false,
      ...dataTask,
    };
    this.tasks.push(task);
    console.log(this.tasks);
    this.closeDetails();
  }

  deleteTask(taskId: Task['id']) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    console.log(this.tasks);
  }

  updateTask(task: Task) {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
    console.log(this.tasks);
  }
}
