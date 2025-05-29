import { Component, Injectable } from "@angular/core";

//
interface ServiceI {
  make(): void;
}

// File service.ts
export class Service implements ServiceI {
  constructor() {
    console.log('Sample class initialized');
  }
  make() {
    console.log('Service make method called');
  }
}

// File service-api.ts
@Injectable(
  {
    providedIn: 'root'
  }
)
export class ServiceApi implements ServiceI {
  
  constructor() {
    console.log('Sample class initialized');
  }
  make() {
    console.log('Service make method called');
  }
}

// File sample.ts
export class Sample {
  service: ServiceI;
  constructor (service: ServiceI) {
    // this.service = new Service();
    this.service = service
    console.log('Sample class initialized');
    this.service.make();
  }
}

// File main.ts
//import { Sample } from './sample';
const service = new Service();
//const service = new ServiceApi();
const sample = new Sample(service);
console.log('Sample instance created:', sample);


// Componente de Angular
@Component({
  selector: 'ine-sample',
  template: `<h1>Sample Component</h1>`,
  standalone: true
})
export class SampleComponent {
  service: ServiceI;
  constructor (service: ServiceApi) {
    // this.service = new Service();
    this.service = service
    console.log('Sample class initialized');
    this.service.make();
  }
}

// Angula NO instancia imperativamente
// new SampleComponent(new Service());

// <ine-sample></ine-sample>