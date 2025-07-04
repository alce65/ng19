import { inject, Injectable } from '@angular/core';
import { Task } from '../types/task';
import { TodoRxRepo } from './repository';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiRxRepositoryService implements TodoRxRepo {
  http = inject(HttpClient);

  url = environment.tasks_api_url;

  private send(data: Task[]) {
    return JSON.parse(JSON.stringify(data));
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  getById(id: string): Observable<Task[]> {
    return this.http.get<Task>(`${this.url}/${id}`).pipe(
      map((data) => {
        return [data];
      }),
    );
  }

  add(newItem: Partial<Task>): Observable<Task[]> {
    newItem.isCompleted = false;
    return this.http.post<Task>(this.url, newItem).pipe(
      map((task) => {
        return [task];
      }),
    );
  }

  update(id: string, updatedItem: Partial<Task>): Observable<Task[]> {
    return this.http.patch<Task>(`${this.url}/${id}`, updatedItem).pipe(
      map((task) => {
        return [task];
      }),
    );
  }

  delete(id: string): Observable<Task[]> {
    return this.http.delete<Task>(`${this.url}/${id}`).pipe(
      map((task) => {
        return [task];
      }),
    );
  }

  private generateId(): string {
    return crypto.randomUUID();
  }
}
