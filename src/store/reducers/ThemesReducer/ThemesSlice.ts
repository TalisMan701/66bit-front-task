import {ITheme} from '../../../models/ITheme';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ThemesState {
    currentTheme: ITheme | null;
    fetchGetTheme: boolean;
    errorGetTheme: string;
}

const initialState: ThemesState = {
    currentTheme: null,
    fetchGetTheme: true,
    errorGetTheme: '',
};

export const themesSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        getThemeFetching(state) {
            state.fetchGetTheme = true;
        },
        getThemeFetchingSuccess(state, action: PayloadAction<ITheme>) {
            state.fetchGetTheme = false;
            state.currentTheme = action.payload;
            state.errorGetTheme = '';
        },
        getThemeFetchingError(state, action: PayloadAction<string>) {
            state.fetchGetTheme = false;
            state.errorGetTheme = action.payload;
        },
    },
});

export default themesSlice.reducer;
