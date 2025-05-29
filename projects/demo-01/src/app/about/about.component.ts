import { Component, inject } from '@angular/core';
import { TimeService } from '../core/services/time.service';
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'ine-about',
  imports: [ContactComponent],
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
    <ine-contact />
  `,
  styles: ``,
})
export default class AboutComponent {
  ts = inject(TimeService);
}
