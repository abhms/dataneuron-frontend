import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export const persistor = persistStore(store);

export default store;