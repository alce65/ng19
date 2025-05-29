import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskDTO } from '../../types/task';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ine-task-create',
  imports: [FormsModule, JsonPipe],
  template: `
    <div class="task-create">
      <h2>Crear nueva tarea</h2>
      <form (submit)="handleClick()" #taskForm="ngForm">
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Título de la tarea"
            [(ngModel)]="taskData.title"
            #titleInput="ngModel"
          />
        </label>
        @if (titleInput.invalid && titleInput.touched) {
          <p>El campo titulo es es requerido</p>
        }

        <label>
          <span>Descripción</span>
          <textarea
            placeholder="Descripción de la tarea"
            name="description"
            [(ngModel)]="taskData.description"
          ></textarea>
        </label>

        <button type="submit" [disabled]="taskForm.form.invalid">
          Crear Tarea
        </button>
      </form>
    </div>
  `,
  styles: `
    label {
      display: block;
      margin-bottom: 1rem;
    }
  `,
})
export class TaskCreateComponent {
  @Output() createTask = new EventEmitter<TaskDTO>();
  taskData: TaskDTO = {
    title: '',
    description: '',
  };

  handleClick() {
    this.createTask.emit(this.taskData);
    this.taskData = { title: '', description: '' }; // Reset form
  }
}
