import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const factsSlice = createSlice({
  name: 'facts',
  initialState: { isLoading: false, fact: undefined },
  reducers: {
    toogleLoading(state, action) {
      state.isLoading = action.payload;
    },
    updateFact(state, action) {
      state.fact = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addFactAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addFactAsync.fulfilled, (state, action) => {
      state.fact = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addFactAsync.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const addFactAsync = createAsyncThunk('posts/fact', async () => {
  const response = await fetch('https://catfact.ninja/fact');
  return response.json();
});

export default factsSlice;
