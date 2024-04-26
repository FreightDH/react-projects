import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface StateType {
  tasks: Task[];
  taskIdForEdit: Task['id'] | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: StateType = {
  tasks: [],
  taskIdForEdit: null,
  isLoading: false,
  isError: false,
};

export const fetchTasks = createAsyncThunk('todo/fetchTasks', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

    if (!response.ok) {
      throw new Error("Couldn't fetch data!");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { title } = action.payload;
      state.tasks.push({ id: Date.now(), userId: 1, title, completed: false });
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
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { addTask, deleteTask, completeTask, setTaskIdForEdit, editTask, saveTasks, loadTasks } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
