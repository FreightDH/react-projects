import { ChangeEvent, ReactElement, useState } from 'react';

import { useAppDispatch } from '../../utils/hooks/reduxHooks';
import { addNewTask } from '../../utils/store/reducers/todoSlice';

import Label from '../Label/Label';
import Button from '../Button/Button';

import styles from './AddSection.module.scss';

const AddSection = (): ReactElement => {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTask(value);
  };

  const handleClick = () => {
    if (task.trim()) {
      dispatch(addNewTask(task));
      setTask('');
    } else {
      alert('Enter the task name!');
    }
  };

  return (
    <section className={styles.add}>
      <div className={styles.add__body}>
        <Label task={task} handleChange={handleChange} />
        <Button action="add" onClick={handleClick}>
          Add
        </Button>
      </div>
    </section>
  );
};

export default AddSection;
