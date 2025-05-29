import { Observable } from "rxjs";

export interface Repo<T extends { id: string }> {
  getAll(): Promise<T[]>;
  getById(id: T['id']): Promise<T[]>;
  add(newItem: Partial<T>): Promise<T[]>;
  update(id: T['id'], updatedItem: Partial<T>): Promise<T[]>;
  delete(id: T['id']): Promise<T[]>;
}

export interface RepoRx<T extends { id: string }> {
  getAll(): Observable<T[]>;
  getById(id: T['id']): Observable<T[]>;
  add(newItem: Partial<T>): Observable<T[]>;
  update(id: T['id'], updatedItem: Partial<T>): Observable<T[]>;
  delete(id: T['id']): Observable<T[]>;
}

export type TodoRepo = Repo<Task>
export type TodoRxRepo = RepoRx<Task>