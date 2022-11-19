import {ITheme} from '../../../models/ITheme';
import {createSlice} from '@reduxjs/toolkit';

interface ThemesState {
    currentTheme: ITheme | null;
}

const initialState: ThemesState = {
    currentTheme: null,
};

export const themesSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {},
});

export default themesSlice.reducer;
