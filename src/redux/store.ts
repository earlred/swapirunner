import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import vehiclesReducer from '../features/vehicles/vehiclesSlice';
import filmsReducer from '../features/films/filmsSlice';
import filmReducer from '../features/film/filmSlice';
import filmDetailReducer from '../features/filmDetail/filmDetailSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, filmDetailReducer);

export const store = configureStore({
  reducer: {
    vehiclesKey: vehiclesReducer,
    filmsKey: filmsReducer,
    filmKey: filmReducer,
    filmDetailKey: persistedReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const persistor = persistStore(store)

