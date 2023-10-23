import React, { ReactElement } from 'react';
import Task from './TaskItem/TaskItem';
import styles from './TasksSection.module.scss';
import EditPanel from '../EditPanel/EditPanel';
import Button from '../Button/Button';

interface TasksSectionProps {
  tasks: Task[];
  completeTask: (id: Task['id']) => void;
  deleteTask: (id: Task['id']) => void;
  selectTaskForEdit: (id: Task['id']) => void;
  taskIdForEdit: Task['id'] | null;
  editTask: (task: Task) => void;
  saveTasks: () => void;
}

const TasksSection: React.FC<TasksSectionProps> = ({
  tasks,
  completeTask,
  deleteTask,
  selectTaskForEdit,
  taskIdForEdit,
  editTask,
  saveTasks,
}): ReactElement => {
  return (
    <section className={styles.tasks}>
      <div className={styles.tasks__header}>
        <p className={styles.tasks__title}>TODOS</p>
        <Button action="save" onClick={saveTasks}>
          Save tasks
        </Button>
      </div>
      <ul className={styles.tasks__list}>
        {tasks.map((task) => {
          if (taskIdForEdit && task.id === taskIdForEdit)
            return <EditPanel task={task} key={task.id} editTask={editTask} />;
          return (
            <Task
              task={task}
              key={task.id}
              completeTask={completeTask}
              deleteTask={deleteTask}
              selectTaskForEdit={selectTaskForEdit}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TasksSection;
