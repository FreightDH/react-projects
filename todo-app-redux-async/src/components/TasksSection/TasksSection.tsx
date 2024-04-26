import { ReactElement } from 'react';

import { useAppSelector } from '../../utils/hooks/useAppSelector';

import EditPanel from '../EditPanel/EditPanel';
import Task from './TaskItem/TaskItem';

import styles from './TasksSection.module.scss';

const TasksSection = (): ReactElement => {
  const tasks = useAppSelector((state) => state.tasks);
  const taskIdForEdit = useAppSelector((state) => state.taskIdForEdit);
  const isLoading = useAppSelector((state) => state.isLoading);

  return (
    <section className={styles.tasks}>
      <div className={styles.tasks__header}>
        <div className={styles.tasks__title}>TODOS</div>
      </div>
      {isLoading && <h2>Loading...</h2>}
      <ul className={styles.tasks__list}>
        {tasks.map((task) => {
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
