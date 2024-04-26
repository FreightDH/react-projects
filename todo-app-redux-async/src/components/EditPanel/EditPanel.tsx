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
  const [newTask, setNewTask] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewTask(value);
  };

  const handleClick = () => {
    dispatch(editTask({ ...task, title: newTask }));
  };

  return (
    <div className={styles.edit}>
      <Input id="name" name="name" placeholder={`Enter Task`} value={newTask} onChange={handleChange} />
      <div className={styles.edit__btn}>
        <Button action="edit" onClick={handleClick}>
          Finish edit
        </Button>
      </div>
    </div>
  );
};

export default EditPanel;
