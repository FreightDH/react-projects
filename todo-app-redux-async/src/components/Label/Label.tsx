import React, { ChangeEvent, ReactElement } from 'react';
import Input from '../Input/Input';
import styles from './Label.module.scss';

interface LabelProps {
  task: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Label: React.FC<LabelProps> = ({ task, handleChange }): ReactElement => {
  return (
    <label htmlFor="title" className={styles.label}>
      <div>Task</div>
      <Input id="title" name="title" placeholder="Enter task" value={task} onChange={handleChange} />
    </label>
  );
};

export default Label;
