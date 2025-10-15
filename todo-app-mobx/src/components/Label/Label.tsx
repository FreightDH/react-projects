import React, { ChangeEvent, ReactElement } from 'react';
import Input from '../Input/Input';
import styles from './Label.module.scss';

interface LabelProps {
  type: string;
  task: Pick<Task, 'name' | 'description'>;
  onInputValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Label: React.FC<LabelProps> = ({ type, task, onInputValueChange }): ReactElement => {
  const typeLabel = type === 'name' ? 'Task' : 'Description';

  return (
    <label htmlFor={type} className={styles.label}>
      <div>{typeLabel}</div>
      <Input
        id={type}
        name={type}
        placeholder={`Enter ${typeLabel}`}
        value={type === 'name' ? task.name : task.description}
        onChange={(event) => onInputValueChange(event)}
      />
    </label>
  );
};

export default Label;
