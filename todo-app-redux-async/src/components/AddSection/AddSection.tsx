import { ChangeEvent, ReactElement, useState } from 'react';
import styles from './AddSection.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addTask } from '../../utils/store/reducers/todoSlice';

import Label from '../Label/Label';

const AddSection = (): ReactElement => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTask(value);
  };

  const handleClick = () => {
    if (task.trim()) {
      dispatch(addTask({ title: task }));
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
