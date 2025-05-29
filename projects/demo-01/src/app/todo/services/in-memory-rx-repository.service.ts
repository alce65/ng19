import { Injectable } from '@angular/core';
import { Task } from '../types/task';
import { TodoRxRepo } from './repository';
import { Observable } from 'rxjs';
import { TASKS } from '../data/tasks';


@Injectable({
  providedIn: 'root',
})
export class InMemoryRxRepositoryService implements TodoRxRepo {
  private items: Task[] = TASKS;

  getAll(): Observable<Task[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.items);
      subscriber.complete();
    });
  }

  getById(id: string): Observable<Task[]> {
    const item = this.items.filter((item) => item.id === id);
    return new Observable((subscriber) => {
      subscriber.next(item);
      subscriber.complete();
    });
  }

  add(newItem: Partial<Task>): Observable<Task[]> {
    const task: Task = { id: this.generateId(), ...newItem } as Task;
    this.items.push(task);
    return new Observable((subscriber) => {
      subscriber.next([task]);
      subscriber.complete();
    });
  }

  update(id: string, updatedItem: Partial<Task>): Observable<Task[]> {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
    }
    return new Observable((subscriber) => {
      subscriber.next([this.items[index]]);
      subscriber.complete();
    });
  }

  delete(id: string): Observable<Task[]> {
    const deleted = this.items.filter((item) => item.id === id);
    if (deleted.length !== 0) {
      this.items = this.items.filter((item) => item.id !== id);
    }
    return new Observable((subscriber) => {
      subscriber.next(deleted);
      subscriber.complete();
    });
  }

  private generateId(): string {
    return crypto.randomUUID();
  }
}
