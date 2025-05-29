import { Observable } from 'rxjs';
import { Task } from '../types/task';

const TASKS: Task[] = [
  {
    id: crypto.randomUUID(),
    title: 'Comprar pan',
    description: 'Comprar pan en la panadería de la esquina',
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'Hacer la compra',
    description: 'Hacer la compra en el supermercado',
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'Lavar el coche',
    description: 'Lavar el coche en el lavadero',
    isCompleted: true,
  },
  {
    id: crypto.randomUUID(),
    title: 'Estudiar para el examen',
    description: 'Estudiar para el examen de matemáticas',
    isCompleted: false,
  },
];

export const getTasks = (): Observable<Task[]> => {
  return new Observable((subscriber) => {
    setTimeout(() => {
      // Simula una llamada a una API
      console.log('Cargando tareas...');
      subscriber.next(TASKS);
    }, 1000);
  });
};
