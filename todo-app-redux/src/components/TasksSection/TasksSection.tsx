import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../utils/hooks/useAppSelector';
import { filterTasks, loadTasks, saveTasks } from '../../utils/store/reducers/todoSlice';

import EditPanel from '../EditPanel/EditPanel';
import Task from './TaskItem/TaskItem';
import Button from '../Button/Button';

import styles from './TasksSection.module.scss';

const TasksSection = (): ReactElement => {
  const tasks = useAppSelector((state) => state.tasks);
  const filteredTasks = useAppSelector((state) => state.filteredTasks);
  const currentFilter = useAppSelector((state) => state.currentFilter);
  const taskIdForEdit = useAppSelector((state) => state.taskIdForEdit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <section className={styles.tasks}>
      <div className={styles.tasks__header}>
        <div className={styles.tasks__title}>TODOS ({tasks.filter((task) => !task.completed).length} left)</div>

        <div className={styles.tasks__controls}>
          <div className={styles.tasks__filter}>
            <Button
              onClick={() => dispatch(filterTasks({ query: 'all' }))}
              className={currentFilter === 'all' ? 'selected' : ''}
            >
              All
            </Button>
            <Button
              onClick={() => dispatch(filterTasks({ query: 'active' }))}
              className={currentFilter === 'active' ? 'selected' : ''}
            >
              Active
            </Button>
            <Button
              onClick={() => dispatch(filterTasks({ query: 'completed' }))}
              className={currentFilter === 'completed' ? 'selected' : ''}
            >
              Completed
            </Button>
          </div>
          <Button action="save" onClick={() => dispatch(saveTasks())}>
            Save tasks
          </Button>
        </div>
      </div>

      <ul className={styles.tasks__list}>
        {filteredTasks.map((task) => {
          if (taskIdForEdit && task.id === taskIdForEdit) {
            return <EditPanel task={task} key={task.id} />;
          }
          return <Task task={task} key={task.id} />;
        })}
      </ul>
    </section>
  );
};

export default TasksSection;
