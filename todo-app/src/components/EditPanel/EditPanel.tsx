import React, { ChangeEvent, ReactElement, useState } from 'react';
import Input from '../Input/Input';
import styles from './EditPanel.module.scss';
import Button from '../Button/Button';

interface EditPanelProps {
  task: Task;
  editTask: (task: Task) => void;
}

const EditPanel: React.FC<EditPanelProps> = ({ task, editTask }): ReactElement => {
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
