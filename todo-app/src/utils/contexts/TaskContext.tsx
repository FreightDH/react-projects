import { createContext } from 'react';

interface TaskContextProps {
  tasks: Task[];
  addTask: ({ name, description }: Pick<Task, 'name' | 'description'>) => void;
  completeTask: (id: Task['id']) => void;
  deleteTask: (id: Task['id']) => void;
  selectTaskForEdit: (id: Task['id']) => void;
  taskIdForEdit: Task['id'] | null;
  editTask: (task: Task) => void;
  saveTasks: () => void;
}

const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  addTask: () => {},
  completeTask: () => {},
  deleteTask: () => {},
  selectTaskForEdit: () => {},
  taskIdForEdit: null,
  editTask: () => {},
  saveTasks: () => {},
});

export default TaskContext;
