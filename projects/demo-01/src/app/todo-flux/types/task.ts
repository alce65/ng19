type UUID = `${string}-${string}-${string}-${string}-${string}`

export interface TaskDTO {
  title: string;
  description: string;
}

export interface Task extends TaskDTO {
  id: UUID;
  isCompleted: boolean;
}
