import { Component, inject, Input, OnInit } from '@angular/core';
import { Task } from '../../types/task';
import { StateService } from '../../store/state.service';

@Component({
  selector: 'ine-task-item-flux',
  imports: [],
  template: `
    <div class="task">
      <h3>{{ task.title }}</h3>
      <p>{{ task.description }}</p>
      <label>
        <input
          type="checkbox"
          name="is-completed"
          [checked]="task.isCompleted"
          (change)="handleChange()"
        />
        <span [class.completed]="task.isCompleted"
          >Estado: {{ task.isCompleted ? 'Completada' : 'Pendiente' }}</span
        >
      </label>
      <button (click)="handleDelete()">Eliminar</button>
    </div>
  `,
  styles: `
    .task {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px 0;
    }
    label {
      padding-right: 0.5rem;
    }
  `,
})
export class TaskItemComponent implements OnInit {
  @Input({ required: true }) task!: Task;
  state = inject(StateService);

  ngOnInit(): void {
    this.task = { ...this.task };
  }

  handleChange() {
    this.task.isCompleted = !this.task.isCompleted;
    this.state.updateTask(this.task);
  }

  handleDelete() {
    this.state.deleteTask(this.task.id);
  }
}
