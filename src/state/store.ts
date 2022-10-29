import { configureStore } from '@reduxjs/toolkit';
import toogleSlice from './toogle.slice';
import factsSlice from './facts.slice';

const store = configureStore({
  reducer: {
    toogle: toogleSlice.reducer,
    facts: factsSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
