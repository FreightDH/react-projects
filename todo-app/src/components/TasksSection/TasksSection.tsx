import React, { ReactElement } from 'react';
import Task from './TaskItem/TaskItem';
import styles from './TasksSection.module.scss';

interface TasksSectionProps {
  tasks: Task[];
  completeTask: (id: Task['id']) => void;
  deleteTask: (id: Task['id']) => void;
}

const TasksSection: React.FC<TasksSectionProps> = ({ tasks, completeTask, deleteTask }): ReactElement => {
  return (
    <section className={styles.tasks}>
      <div className={styles.tasks__title}>TODOS</div>
      <ul className={styles.tasks__list}>
        {tasks.map((task) => (
          <Task task={task} key={task.id} completeTask={completeTask} deleteTask={deleteTask} />
        ))}
      </ul>
    </section>
  );
};

export default TasksSection;
