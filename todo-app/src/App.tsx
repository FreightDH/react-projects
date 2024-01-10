import TaskProvider from './utils/contexts/TaskProvider';
import AddSection from './components/AddSection/AddSection';
import TasksSection from './components/TasksSection/TasksSection';

import './styles/App.scss';
import styles from './styles/Page.module.scss';

function App() {
  return (
    <TaskProvider>
      <main className={styles.page}>
        <div className="page__container">
          <div className={styles.page__body}>
            <div className={styles.page__title}>todos</div>
            <AddSection />
            <TasksSection />
          </div>
        </div>
      </main>
    </TaskProvider>
  );
}

export default App;
