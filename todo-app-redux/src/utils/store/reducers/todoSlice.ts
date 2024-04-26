import { createSlice } from '@reduxjs/toolkit';

interface StateType {
  tasks: Task[];
  taskIdForEdit: Task['id'] | null;
}

const initialState: StateType = {
  tasks: [],
  taskIdForEdit: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { name, description } = action.payload;
      state.tasks.push({ id: Date.now(), name, description, completed: false });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    completeTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, completed: !task.completed };
        }

        return task;
      });
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
    },
    saveTasks: (state) => {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    loadTasks: (state) => {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        state.tasks = JSON.parse(savedTasks);
      }
    },
  },
});

export const { addTask, deleteTask, completeTask, setTaskIdForEdit, editTask, saveTasks, loadTasks } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
