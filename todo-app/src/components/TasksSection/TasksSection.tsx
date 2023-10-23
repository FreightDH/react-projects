import { ReactElement } from 'react';
import useTask from '../../utils/contexts/useTask';

import EditPanel from '../EditPanel/EditPanel';
import Task from './TaskItem/TaskItem';
import Button from '../Button/Button';

import styles from './TasksSection.module.scss';

const TasksSection = (): ReactElement => {
  const { tasks, taskIdForEdit, saveTasks } = useTask();

  return (
    <section className={styles.tasks}>
      <div className={styles.tasks__header}>
        <div className={styles.tasks__title}>TODOS</div>
        <Button action="save" onClick={saveTasks}>
          Save tasks
        </Button>
      </div>
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
