import React, { ReactElement } from 'react';
import useTask from '../../../utils/contexts/useTask';

import Button from '../../Button/Button';

import styles from './TaskItem.module.scss';

type TaskProps = {
  task: Task;
};

const Task: React.FC<TaskProps> = ({ task }): ReactElement => {
  const { completeTask, deleteTask, selectTaskForEdit } = useTask();
  const taskNameClass = task.completed ? `${styles.task__name} ${styles.completed}` : `${styles.task__name}`;

  return (
    <li className={styles.task}>
      <div className={taskNameClass}>{task.name}</div>
      <div className={styles.task__description}>{task.description}</div>
      <div className={styles.task__buttons}>
        <Button action="complete" onClick={() => completeTask(task.id)}>
          Complete
        </Button>
        <Button action="edit" onClick={() => selectTaskForEdit(task.id)}>
          Edit
        </Button>
        <Button action="delete" onClick={() => deleteTask(task.id)}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default Task;
