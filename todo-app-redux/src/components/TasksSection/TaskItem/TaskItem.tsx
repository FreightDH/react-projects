import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { completeTask, deleteTask, setTaskIdForEdit } from '../../../utils/store/reducers/todoSlice';

import Button from '../../Button/Button';

import styles from './TaskItem.module.scss';

type TaskProps = {
  task: Task;
};

const Task: React.FC<TaskProps> = ({ task }): ReactElement => {
  const dispatch = useDispatch();
  const taskNameClass = task.completed ? `${styles.task__name} ${styles.completed}` : `${styles.task__name}`;

  return (
    <li className={styles.task}>
      <div className={taskNameClass}>{task.name}</div>
      <div className={styles.task__description}>{task.description}</div>
      <div className={styles.task__buttons}>
        <Button action="complete" onClick={() => dispatch(completeTask({ id: task.id }))}>
          Complete
        </Button>
        <Button action="edit" onClick={() => dispatch(setTaskIdForEdit({ id: task.id }))}>
          Edit
        </Button>
        <Button action="delete" onClick={() => dispatch(deleteTask({ id: task.id }))}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default Task;
