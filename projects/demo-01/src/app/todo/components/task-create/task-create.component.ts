import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TaskDTO } from '../../types/task';

@Component({
  selector: 'ine-task-create',
  imports: [FormsModule],
  template: `
    <div class="task-create">
      <h2>Crear nueva tarea</h2>
      <form (submit)="handleSubmit( taskForm)" #taskForm="ngForm">
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Título de la tarea"
            ngModel
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
            ngModel
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
  //  = {
  //   title: '',
  //   description: '',
  // };

  handleSubmit(taskForm: NgForm) {
    this.createTask.emit(taskForm.value);
    // Reset form
    taskForm.resetForm();
  }
}
