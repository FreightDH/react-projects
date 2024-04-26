import React, { ChangeEvent, ReactElement, useState } from 'react';

import { useAppDispatch } from '../../utils/hooks/reduxHooks';
import { patchTask } from '../../utils/store/reducers/todoSlice';

import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './EditPanel.module.scss';

interface EditPanelProps {
  task: Task;
}

const EditPanel: React.FC<EditPanelProps> = ({ task }): ReactElement => {
  const dispatch = useAppDispatch();
  const [newTask, setNewTask] = useState(task.title);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewTask(value);
  };

  const handleClick = () => {
    dispatch(patchTask({ ...task, title: newTask }));
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
