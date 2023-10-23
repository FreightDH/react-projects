import React, { ReactElement } from 'react';
import styles from './TaskItem.module.scss';
import Button from '../../Button/Button';

type TaskProps = {
  task: Task;
  completeTask: (id: Task['id']) => void;
  deleteTask: (id: Task['id']) => void;
  selectTaskForEdit: (id: Task['id']) => void;
};

const Task: React.FC<TaskProps> = ({ task, completeTask, deleteTask, selectTaskForEdit }): ReactElement => {
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
