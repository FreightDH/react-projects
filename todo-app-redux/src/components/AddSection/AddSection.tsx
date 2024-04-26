import { ChangeEvent, ReactElement, useState } from 'react';
import styles from './AddSection.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addTask } from '../../utils/store/reducers/todoSlice';

import Label from '../Label/Label';

const DEFAULT_TASK = {
  name: '',
  description: '',
};

const AddSection = (): ReactElement => {
  const dispatch = useDispatch();
  const [task, setTask] = useState(DEFAULT_TASK);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const handleClick = () => {
    if (task.name.trim()) {
      dispatch(addTask({ name: task.name, description: task.description }));
      setTask(DEFAULT_TASK);
    } else {
      alert('Enter the task name!');
    }
  };

  return (
    <section className={styles.add}>
      <div className={styles.add__body}>
        <Label type="name" task={task} handleChange={handleChange} />
        <Label type="description" task={task} handleChange={handleChange} />
        <Button action="add" onClick={handleClick}>
          Add
        </Button>
      </div>
    </section>
  );
};

export default AddSection;
