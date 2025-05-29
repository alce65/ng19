import { TestBed } from '@angular/core/testing';
import { TimeService } from './time.service';

describe('TimeService', () => {
  let service: TimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeService);
    // service = new TimeService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the current time', () => {
    const currentTime = service.getTime();
    expect(currentTime).toBeDefined();
    expect(typeof currentTime === 'number').toBeTrue();
  });
});
