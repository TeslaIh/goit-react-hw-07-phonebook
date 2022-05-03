import { configureStore } from '@reduxjs/toolkit';
import contactSlice from 'redux/contacts/contacts-filter';
import { contactsApi } from 'redux/contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: contactSlice,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});
