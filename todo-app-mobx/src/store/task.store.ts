import { autorun, makeAutoObservable } from 'mobx';

class TaskStore {
  tasks: Task[] = [];
  taskIdForEdit: Task['id'] | null = null;

  constructor() {
    makeAutoObservable(this);

    this.loadTasks();

    autorun(() => this.saveTasks());
  }

  addTask({ name, description }: Pick<Task, 'name' | 'description'>) {
    this.tasks.push({ id: Date.now(), name, description, completed: false });
  }

  completeTask(id: Task['id']) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });
  }

  deleteTask(id: Task['id']) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  selectTaskForEdit(id: Task['id']) {
    this.taskIdForEdit = id;
  }

  editTask(newTask: Task) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === newTask.id) {
        this.taskIdForEdit = null;
        return newTask;
      }

      return task;
    });
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }
}

export default new TaskStore();
