import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task, TaskDTO } from '../types/task';
import { ApiRxRepositoryService } from '../../todo/services/api-rx-repository.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private repo = inject(ApiRxRepositoryService);
  private tasks = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasks.asObservable();


  constructor() {
    console.log('StateService inicializado');
    // Cargar las tareas al iniciar el servicio
    this.loadTasks();
  }

  loadTasks() {
    this.repo.getAll().subscribe({
      next: (tasks) => {
        this.tasks.next(tasks);
        console.log('Tareas cargadas:', tasks);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  createTask(dataTask: TaskDTO) {
    // asincrono: Repositorio

    this.repo.add(dataTask).subscribe((task) => {
      if (task.length === 0) {
        console.error('Error al crear la tarea');
      } else {
        // sincrono: Componente (State) de form no optimista
        const data = [...this.tasks.value, ...task];
        this.tasks.next(data);
      }
    });
  }

  deleteTask(taskId: Task['id']) {
    this.repo.delete(taskId).subscribe({
      next: (deletedTasks) => {
        if (deletedTasks.length === 0) {
          console.error('Error al crear la tarea');
          return;
        }
        const data = this.tasks.value.filter(
          (task) => task.id !== deletedTasks[0].id,
        );
        this.tasks.next(data);
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
        const index = this.tasks.value.findIndex((t) => t.id === id);
        if (index !== -1) {
          this.tasks.value[index] = updatedTasks[0];
        }
        this.tasks.next([...this.tasks.value]);
      },
    });
  }
}
