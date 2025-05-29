import { Injectable } from '@angular/core';
import { Task } from '../types/task';
import { TodoRxRepo } from './repository';
import { Observable } from 'rxjs';
import { TASKS } from '../data/tasks';

@Injectable({
  providedIn: 'root',
})
export class InMemoryRxRepositoryService implements TodoRxRepo {
  private _items: Task[] = [...TASKS];

  get items(): Task[] {
    return this._items;
  }

  private send(data: Task[]) {
    return JSON.parse(JSON.stringify(data));
  }

  getAll(): Observable<Task[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.send(this._items));
      subscriber.complete();
    });
  }

  getById(id: string): Observable<Task[]> {
    const item = this._items.filter((item) => item.id === id);
    return new Observable((subscriber) => {
      subscriber.next(this.send(item));
      subscriber.complete();
    });
  }

  add(newItem: Partial<Task>): Observable<Task[]> {
    const task: Task = { id: this.generateId(), ...newItem } as Task;
    this._items.push(task);
    return new Observable((subscriber) => {
      subscriber.next(this.send([task]));
      subscriber.complete();
    });
  }

  update(id: string, updatedItem: Partial<Task>): Observable<Task[]> {
    const index = this._items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this._items[index] = { ...this._items[index], ...updatedItem };
    }
    return new Observable((subscriber) => {
      subscriber.next(this.send([this._items[index]]));
      subscriber.complete();
    });
  }

  delete(id: string): Observable<Task[]> {
    const deleted = this._items.filter((item) => item.id === id);
    if (deleted.length !== 0) {
      this._items = this._items.filter((item) => item.id !== id);
    }
    return new Observable((subscriber) => {
      subscriber.next(this.send(deleted));
      subscriber.complete();
    });
  }

  private generateId(): string {
    return crypto.randomUUID();
  }
}
