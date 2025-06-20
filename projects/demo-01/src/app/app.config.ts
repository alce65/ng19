import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import localeEs from '@angular/common/locales/es'

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';


registerLocaleData(localeEs, 'es');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
    provideHttpClient(withFetch())
    // {
    //   provide: TimeService,
    //   useClass: TimeService
    // }
  ]
};
