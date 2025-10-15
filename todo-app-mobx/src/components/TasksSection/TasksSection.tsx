import { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';

import taskStore from '../../store/task.store';

import EditPanel from '../EditPanel/EditPanel';
import Task from './TaskItem/TaskItem';
import Button from '../Button/Button';

import styles from './TasksSection.module.scss';

const TasksSection = observer((): ReactElement => {
  return (
    <section className={styles.tasks}>
      <div className={styles.tasks__header}>
        <div className={styles.tasks__title}>TODOS</div>
        <Button action="save" onClick={() => taskStore.saveTasks()}>
          Save tasks
        </Button>
      </div>
      <ul className={styles.tasks__list}>
        {taskStore.tasks.map((task) => {
          if (taskStore.taskIdForEdit && task.id === taskStore.taskIdForEdit) {
            return <EditPanel task={task} key={task.id} />;
          }
          return <Task task={task} key={task.id} />;
        })}
      </ul>
    </section>
  );
});

export default TasksSection;
