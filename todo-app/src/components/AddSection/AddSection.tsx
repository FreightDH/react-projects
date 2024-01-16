import { ChangeEvent, ReactElement, useState } from 'react';
import styles from './AddSection.module.scss';
import Button from '../Button/Button';
import Label from '../Label/Label';
import useTask from '../../utils/contexts/useTask';

const DEFAULT_TASK = {
  name: '',
  description: '',
};

const AddSection = (): ReactElement => {
  const { addTask } = useTask();
  const [task, setTask] = useState(DEFAULT_TASK);

  const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const onAddButtonClick = () => {
    if (task.name.trim()) {
      addTask({ name: task.name, description: task.description });
      setTask(DEFAULT_TASK);
    } else {
      alert('Enter the task name!');
    }
  };

  return (
    <section className={styles.add}>
      <div className={styles.add__body}>
        <Label type="name" task={task} onInputValueChange={onInputValueChange} />
        <Label type="description" task={task} onInputValueChange={onInputValueChange} />
        <Button action="add" onClick={onAddButtonClick}>
          Add
        </Button>
      </div>
    </section>
  );
};

export default AddSection;
