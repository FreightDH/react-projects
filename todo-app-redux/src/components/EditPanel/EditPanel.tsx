import React, { ChangeEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import { editTask } from '../../utils/store/reducers/todoSlice';

import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './EditPanel.module.scss';

interface EditPanelProps {
  task: Task;
}

const EditPanel: React.FC<EditPanelProps> = ({ task }): ReactElement => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({ name: task.name, description: task.description });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleClick = () => {
    dispatch(editTask({ ...task, name: newTask.name, description: newTask.description }));
  };

  return (
    <div className={styles.edit}>
      <Input id="name" name="name" placeholder={`Enter Task`} value={newTask.name} onChange={handleChange} />
      <Input
        id="description"
        name="description"
        placeholder={`Enter Description`}
        value={newTask.description}
        onChange={handleChange}
      />
      <div className={styles.edit__btn}>
        <Button action="edit" onClick={handleClick}>
          Finish edit
        </Button>
      </div>
    </div>
  );
};

export default EditPanel;
