import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
    title: 'Inicio | Demo 01',
    data: {
      label: 'Inicio',
    },
  },
  {
    path: 'todo',
    loadComponent: () => import('./todo/todo.component'),
    title: 'Lista de Tareas | Demo 01',
    data: {
      label: 'Tareas',
    },
  },
    {
    path: 'todo-flux',
    loadComponent: () => import('./todo-flux/todo.component'),
    title: 'Lista de Tareas Flux | Demo 01',
    data: {
      label: 'Tareas Flux',
    },
  },
  {
    path: 'products',
    loadComponent: () => import('./products/products.component'),
    title: 'Lista de Productos | Demo 01',
    data: {
      label: 'Productos',
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component'),
    title: 'Acerca de | Demo 01',
    data: {
      label: 'Acerca de',
    },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

interface MenuOption {
  label: string;
  path: string;
}

export const menuOptions: MenuOption[] = routes
  .filter((route) => route.data)
  .map((route) => {
    return {
      label: route.data!['label'] as string,
      path: route.path as string,
    };
  });
