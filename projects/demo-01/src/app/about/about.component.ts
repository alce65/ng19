import { Component, inject } from '@angular/core';
import { TimeService } from '../core/services/time.service';

@Component({
  selector: 'ine-about',
  imports: [],
  providers: [
    // {
    //   provide: TimeService,
    //   useValue: { getTime: () => 'Hola, no se el tiempo' }
    // }
     TimeService
  
  ],
  template: `
    <p>about works!</p>
    <p>
      {{ ts.getTime() }}
    </p>
  `,
  styles: ``,
})
export default class AboutComponent {
  ts = inject(TimeService);
}
