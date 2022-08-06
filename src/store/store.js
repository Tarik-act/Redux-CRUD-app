import { configureStore } from '@reduxjs/toolkit';
import usersReducer, { fetchUsers } from '../components/users/userSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

store.dispatch(fetchUsers());
