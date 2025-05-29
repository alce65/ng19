
type Courses = 'Angular' | 'React' | 'Vue'
type Turn = 'mañana' | 'tarde' | 'noche'

export interface User {
  id: number;
  name: string;
  email: string;
  isStudent: boolean;
  cursos: Courses,
  turno: Turn
}

export type UserDTO = Omit<User, 'id'>;