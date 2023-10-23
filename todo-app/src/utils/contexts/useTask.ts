import { useContext } from 'react';
import TaskContext from './TaskContext';

const useTask = () => useContext(TaskContext);

export default useTask;
