import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

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

export const addNewTask = createAsyncThunk('todo/addNewTask', async (title: string, { rejectWithValue, dispatch }) => {
  const task = {
    id: Date.now(),
    userId: 1,
    title,
    completed: false,
  };

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Can't add task. Server error.");
    }

    const data = await response.json();

    dispatch(addTask(data));
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export const deleteTask = createAsyncThunk('todo/deleteTask', async (id: number, { rejectWithValue, dispatch }) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error("Can't delete task. Server error.");
    }

    dispatch(removeTask({ id }));
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export const toggleTask = createAsyncThunk(
  'todo/toggleTask',
  async (id: number, { rejectWithValue, dispatch, getState }) => {
    const state = getState() as RootState;
    const task = state.tasks.find((task) => task.id === id);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: !task?.completed,
        }),
      });

      if (!response.ok) {
        throw new Error("Can't delete task. Server error.");
      }

      dispatch(completeTask({ id }));
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const patchTask = createAsyncThunk('todo/patchTask', async (task: Task, { rejectWithValue, dispatch }) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: task.title,
      }),
    });

    if (!response.ok) {
      throw new Error("Can't delete task. Server error.");
    }

    dispatch(editTask({ title: task.title }));
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
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
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

          return { ...task, title: action.payload.title };
        }

        return task;
      });
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
    builder.addCase(fetchTasks.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(addNewTask.rejected, (state) => {
      state.isError = true;
    });
    builder.addCase(deleteTask.rejected, (state) => {
      state.isError = true;
    });
    builder.addCase(toggleTask.rejected, (state) => {
      state.isError = true;
    });
    builder.addCase(patchTask.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const { addTask, removeTask, completeTask, setTaskIdForEdit, editTask } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
