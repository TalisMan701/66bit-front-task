import {combineReducers, configureStore} from '@reduxjs/toolkit';
import newsReducer from './reducers/NewsReducer/NewsSlice';
import themesReducer from './reducers/ThemesReducer/ThemesSlice';

const rootReducer = combineReducers({
    newsReducer,
    themesReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
