import React, { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';

import taskStore from '../../../store/task.store';

import Button from '../../Button/Button';

import styles from './TaskItem.module.scss';

type TaskProps = {
  task: Task;
};

const Task: React.FC<TaskProps> = observer(({ task }): ReactElement => {
  const taskNameClass = task.completed ? `${styles.task__name} ${styles.completed}` : `${styles.task__name}`;

  return (
    <li className={styles.task}>
      <div className={taskNameClass}>{task.name}</div>
      <div className={styles.task__description}>{task.description}</div>
      <div className={styles.task__buttons}>
        <Button action="complete" onClick={() => taskStore.completeTask(task.id)}>
          Complete
        </Button>
        <Button action="edit" onClick={() => taskStore.selectTaskForEdit(task.id)}>
          Edit
        </Button>
        <Button action="delete" onClick={() => taskStore.deleteTask(task.id)}>
          Delete
        </Button>
      </div>
    </li>
  );
});

export default Task;
