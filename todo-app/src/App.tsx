import { useEffect, useState } from 'react';
import AddSection from './components/AddSection/AddSection';
import TasksSection from './components/TasksSection/TasksSection';
import styles from './styles/Page.module.scss';
import './styles/App.scss';

const DEFAULT_TODO_LIST: Task[] = [];

function App() {
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

  return (
    <>
      <main className={styles.page}>
        <div className="page__container">
          <div className={styles.page__body}>
            <div className={styles.page__title}>todos</div>
            <AddSection addTask={addTask} />
            <TasksSection
              tasks={tasks}
              completeTask={completeTask}
              deleteTask={deleteTask}
              selectTaskForEdit={selectTaskForEdit}
              taskIdForEdit={taskIdForEdit}
              editTask={editTask}
              saveTasks={saveTasks}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
