import { Injectable } from '@angular/core';
import { Task } from '../types/task';
import { TodoRepo } from './repository';

import { TASKS } from '../data/tasks';

@Injectable({
  providedIn: 'root',
})
export class InMemoryRepositoryService implements TodoRepo {
  private _items: Task[] = [...TASKS];

  get items(): Task[] {
    return this._items;
  }

  getAll(): Promise<Task[]> {
    return Promise.resolve(this._items);
  }

  getById(id: string): Promise<Task[]> {
    const item = this._items.filter((item) => item.id === id);
    return Promise.resolve(item);
  }

  add(newItem: Partial<Task>): Promise<Task[]> {
    const task: Task = { id: this.generateId(), 
      isCompleted: false,
      ...newItem } as Task;
    this._items.push(task);
    return Promise.resolve([task]);
  }

  update(id: string, updatedItem: Partial<Task>): Promise<Task[]> {
    const index = this._items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this._items[index] = { ...this._items[index], ...updatedItem };
    }
    return Promise.resolve([this._items[index]]);
  }

  delete(id: string): Promise<Task[]> {
    const deleted = this._items.filter((item) => item.id === id);
    if (deleted.length !== 0) {
      this._items = this._items.filter((item) => item.id !== id);
    }
    return Promise.resolve(deleted);
  }

  private generateId(): string {
    return crypto.randomUUID();
  }
}
