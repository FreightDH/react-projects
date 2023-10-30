import { ReactElement, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import TaskContext from './TaskContext';

interface TaskProviderProps {
  children: ReactNode;
}

const DEFAULT_TODO_LIST: Task[] = [];

const TaskProvider: React.FC<TaskProviderProps> = ({ children }): ReactElement => {
  const [tasks, setTasks] = useState(DEFAULT_TODO_LIST);
  const [taskIdForEdit, setTaskIdForEdit] = useState<Task['id'] | null>(null);

  const addTask = useCallback(
    ({ name, description }: Pick<Task, 'name' | 'description'>) => {
      setTasks((prevTasks) => [...prevTasks, { id: Date.now(), name, description, completed: false }]);
    },
    [setTasks],
  );

  const completeTask = useCallback(
    (id: Task['id']) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === id) {
            return { ...task, completed: !task.completed };
          }

          return task;
        }),
      );
    },
    [setTasks],
  );

  const deleteTask = useCallback(
    (id: Task['id']) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    },
    [setTasks],
  );

  const selectTaskForEdit = useCallback(
    (id: Task['id']) => {
      setTaskIdForEdit(id);
    },
    [setTaskIdForEdit],
  );

  const editTask = useCallback(
    (newTask: Task) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === taskIdForEdit) {
            setTaskIdForEdit(null);
            return newTask;
          }

          return task;
        }),
      );
    },
    [setTasks, setTaskIdForEdit, taskIdForEdit],
  );

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const saveTasks = useCallback(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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
