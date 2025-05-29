import { Injectable } from '@angular/core';
import { Task } from '../types/task';
import { TodoRepo } from './repository';

import { TASKS } from '../data/tasks';

@Injectable({
  providedIn: 'root',
})
export class InMemoryRepositoryService implements TodoRepo {
  private items: Task[] = TASKS;

  getAll(): Promise<Task[]> {
    return Promise.resolve(this.items);
  }

  getById(id: string): Promise<Task[]> {
    const item = this.items.filter((item) => item.id === id);
    return Promise.resolve(item);
  }

  add(newItem: Partial<Task>): Promise<Task[]> {
    const task: Task = { id: this.generateId(), 
      isCompleted: false,
      ...newItem } as Task;
    this.items.push(task);
    return Promise.resolve([task]);
  }

  update(id: string, updatedItem: Partial<Task>): Promise<Task[]> {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
    }
    return Promise.resolve([this.items[index]]);
  }

  delete(id: string): Promise<Task[]> {
    const deleted = this.items.filter((item) => item.id === id);
    if (deleted.length !== 0) {
      this.items = this.items.filter((item) => item.id !== id);
    }
    return Promise.resolve(deleted);
  }

  private generateId(): string {
    return crypto.randomUUID();
  }
}
