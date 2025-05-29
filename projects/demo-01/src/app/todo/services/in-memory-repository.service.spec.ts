import { TestBed } from '@angular/core/testing';

import { InMemoryRepositoryService } from './in-memory-repository.service';
import { TASKS } from '../data/tasks';

describe('InMemoryRepositoryService', () => {
  let service: InMemoryRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all tasks', () => {
    //const tasks = await service.getAll();
    //expect(tasks).toEqual(TASKS);
    service.getAll().then((tasks) => {
      expect(tasks).toEqual(TASKS);
    });
  });

  it('should return a task by id', async () => {
    const task = await service.getById(TASKS[0].id);
    expect(task).toEqual([TASKS[0]]);
  });
  // it('should add a new task', async () => {
  //   const newTask = { title: 'New Task', description: 'Test' };
  //   const addedTasks = await service.add(newTask);
  //   const tasks = await service.getAll();
  //   expect(tasks[5]).toEqual(addedTasks[0]);
  // });
  // it('should update an existing task', async () => {
  //   const updatedTask = { title: 'Updated Task' };
  //   const updatedTasks = await service.update(TASKS[0].id, updatedTask);
  //   expect(updatedTasks[0].title).toEqual('Updated Task');
  // });
});
