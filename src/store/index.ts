import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import sampleReducer from '../reducer/testReduces'

export const store = configureStore({
  reducer: {test: sampleReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
