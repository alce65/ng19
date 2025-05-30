import { Injectable } from '@angular/core';
import { Task } from '../types/task';
import { TodoRepo } from './repository';

import { TASKS } from '../data/tasks';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiRepositoryService implements TodoRepo {
  private _items: Task[] = [...TASKS];

  get items(): Task[] {
    return this._items;
  }

  private url = environment.tasks_api_url;

  async getAll(): Promise<Task[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    return response.json();
  }

  getById(id: string): Promise<Task[]> {
    const item = this._items.filter((item) => item.id === id);
    return Promise.resolve(item);
  }

  async add(newItem: Partial<Task>): Promise<Task[]> {
    // const task: Task = { id: this.generateId(),
    //   isCompleted: false,
    //   ...newItem } as Task;

    newItem.isCompleted = false;
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }

    // this._items.push(task);
    return response.json();
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
