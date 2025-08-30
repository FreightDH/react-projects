import { createSlice } from '@reduxjs/toolkit';

interface StateType {
  tasks: Task[];
  filteredTasks: Task[];
  taskIdForEdit: Task['id'] | null;
  currentFilter: 'all' | 'active' | 'completed';
}

const initialState: StateType = {
  tasks: [],
  filteredTasks: [],
  taskIdForEdit: null,
  currentFilter: 'all',
};

const applyFilter = (state: StateType) => {
  switch (state.currentFilter) {
    case 'completed':
      state.filteredTasks = state.tasks.filter((task) => task.completed);
      break;
    case 'active':
      state.filteredTasks = state.tasks.filter((task) => !task.completed);
      break;
    default:
      state.filteredTasks = state.tasks;
      break;
  }
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { name, description } = action.payload;
      state.tasks.push({ id: Date.now(), name, description, completed: false });
      applyFilter(state);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      applyFilter(state);
    },
    completeTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, completed: !task.completed };
        }

        return task;
      });
      applyFilter(state);
    },
    setTaskIdForEdit: (state, action) => {
      state.taskIdForEdit = action.payload.id;
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === state.taskIdForEdit) {
          state.taskIdForEdit = null;

          return action.payload;
        }

        return task;
      });
      applyFilter(state);
    },
    saveTasks: (state) => {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    loadTasks: (state) => {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        state.tasks = JSON.parse(savedTasks);
        applyFilter(state);
      }
    },
    filterTasks: (state, action) => {
      const { query } = action.payload;
      state.currentFilter = query;
      applyFilter(state);
    },
  },
});

export const { addTask, deleteTask, completeTask, setTaskIdForEdit, editTask, saveTasks, loadTasks, filterTasks } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
