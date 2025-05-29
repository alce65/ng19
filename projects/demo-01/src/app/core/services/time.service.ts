import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  time: Date = new Date();
  getTime() {
    return this.time.getTime();
  }
}
