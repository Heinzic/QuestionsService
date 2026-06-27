import { configureStore } from '@reduxjs/toolkit';
import { rtkBaseApi } from '../../shared/api/rtkBaseApi';

export const store = configureStore({
  reducer: {
    [rtkBaseApi.reducerPath]: rtkBaseApi.reducer,   
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkBaseApi.middleware),
});

