import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from './utils/store';
import { fetchTasks } from './utils/store/reducers/todoSlice';

import AddSection from './components/AddSection/AddSection';
import TasksSection from './components/TasksSection/TasksSection';

import './styles/App.scss';
import styles from './styles/Page.module.scss';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <main className={styles.page}>
      <div className="page__container">
        <div className={styles.page__body}>
          <div className={styles.page__title}>todos</div>
          <AddSection />
          <TasksSection />
        </div>
      </div>
    </main>
  );
}

export default App;
