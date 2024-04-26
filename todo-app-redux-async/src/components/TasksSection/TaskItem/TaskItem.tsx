import React, { ReactElement } from 'react';

import { useAppDispatch } from '../../../utils/hooks/reduxHooks';
import { deleteTask, setTaskIdForEdit, toggleTask } from '../../../utils/store/reducers/todoSlice';

import Button from '../../Button/Button';

import styles from './TaskItem.module.scss';

type TaskProps = {
  task: Task;
};

const Task: React.FC<TaskProps> = ({ task }): ReactElement => {
  const dispatch = useAppDispatch();
  const taskNameClass = task.completed ? `${styles.task__name} ${styles.completed}` : `${styles.task__name}`;

  return (
    <li className={styles.task}>
      <div className={taskNameClass}>{task.title}</div>
      <div className={styles.task__buttons}>
        <Button action="complete" onClick={() => dispatch(toggleTask(task.id))}>
          Complete
        </Button>
        <Button action="edit" onClick={() => dispatch(setTaskIdForEdit({ id: task.id }))}>
          Edit
        </Button>
        <Button action="delete" onClick={() => dispatch(deleteTask(task.id))}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default Task;
