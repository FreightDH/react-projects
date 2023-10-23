import React, { ChangeEvent, ReactElement, useState } from 'react';
import useTask from '../../utils/contexts/useTask';

import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './EditPanel.module.scss';

interface EditPanelProps {
  task: Task;
}

const EditPanel: React.FC<EditPanelProps> = ({ task }): ReactElement => {
  const { editTask } = useTask();
  const [newTask, setNewTask] = useState({ name: task.name, description: task.description });

  const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const onFinishEditButtonClick = () => {
    editTask({ ...task, name: newTask.name, description: newTask.description });
  };

  return (
    <div className={styles.edit}>
      <Input
        id="name"
        name="name"
        placeholder={`Enter Task`}
        value={newTask.name}
        onChange={(event) => onInputValueChange(event)}
      />
      <Input
        id="description"
        name="description"
        placeholder={`Enter Description`}
        value={newTask.description}
        onChange={(event) => onInputValueChange(event)}
      />
      <div className={styles.edit__btn}>
        <Button action="edit" onClick={onFinishEditButtonClick}>
          Finish edit
        </Button>
      </div>
    </div>
  );
};

export default EditPanel;
