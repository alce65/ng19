export interface TaskDTO {
  title: string;
  description: string;
}

export interface Task extends TaskDTO {
  id: string;
  isCompleted: boolean;
}
