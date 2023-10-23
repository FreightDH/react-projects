import { ReactElement, ReactNode, useEffect, useMemo, useState } from 'react';
import TaskContext from './TaskContext';

interface TaskProviderProps {
  children: ReactNode;
}

const DEFAULT_TODO_LIST: Task[] = [];

const TaskProvider: React.FC<TaskProviderProps> = ({ children }): ReactElement => {
  const [tasks, setTasks] = useState(DEFAULT_TODO_LIST);
  const [taskIdForEdit, setTaskIdForEdit] = useState<Task['id'] | null>(null);

  const addTask = ({ name, description }: Pick<Task, 'name' | 'description'>) => {
    setTasks([...tasks, { id: Date.now(), name, description, completed: false }]);
  };

  const completeTask = (id: Task['id']) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }

        return task;
      }),
    );
  };

  const deleteTask = (id: Task['id']) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const selectTaskForEdit = (id: Task['id']) => {
    setTaskIdForEdit(id);
  };

  const editTask = (newTask: Task) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskIdForEdit) {
          setTaskIdForEdit(null);
          return newTask;
        }

        return task;
      }),
    );
  };

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      completeTask,
      deleteTask,
      taskIdForEdit,
      selectTaskForEdit,
      editTask,
      saveTasks,
    }),
    [tasks, addTask, completeTask, deleteTask, taskIdForEdit, selectTaskForEdit, editTask, saveTasks],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
