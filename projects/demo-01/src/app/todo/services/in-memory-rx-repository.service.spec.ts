import { TestBed } from '@angular/core/testing';
import { InMemoryRxRepositoryService } from './in-memory-rx-repository.service';
import { TASKS } from '../data/tasks';

describe('InMemoryRepositoryService', () => {
  let service: InMemoryRxRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryRxRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  fit('should return all tasks', () => {
    service.getAll().subscribe((tasks) => {
      expect(tasks).toEqual(TASKS);
    });
  });
});
