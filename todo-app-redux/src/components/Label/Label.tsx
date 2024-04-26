import React, { ChangeEvent, ReactElement } from 'react';
import Input from '../Input/Input';
import styles from './Label.module.scss';

interface LabelProps {
  type: string;
  task: Pick<Task, 'name' | 'description'>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Label: React.FC<LabelProps> = ({ type, task, handleChange }): ReactElement => {
  const typeLabel = type === 'name' ? 'Task' : 'Description';

  return (
    <label htmlFor={type} className={styles.label}>
      <div>{typeLabel}</div>
      <Input
        id={type}
        name={type}
        placeholder={`Enter ${typeLabel}`}
        value={type === 'name' ? task.name : task.description}
        onChange={handleChange}
      />
    </label>
  );
};

export default Label;
