import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Inicio | Demo 01',
    data: {
      label: 'Inicio',
    },
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Lista de Productos | Demo 01',
    data: {
      label: 'Productos',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Acerca de | Demo 01',
    data: {
      label: 'Acerca de',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export const menuOption = routes
  .filter((route) => route.data)
  .map((route) => {
    return {
      label: route.data!['label'],
      path: route.path,
    };
  });

