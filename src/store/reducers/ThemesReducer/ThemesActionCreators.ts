import {AppDispatch} from '../../redux-store';
import {themesSlice} from './ThemesSlice';
import {themeAPI} from '../../../api/api';
import {ThemeNameType} from '../../../models/ThemeNameType';

export const getTheme = (name: ThemeNameType) => (dispatch: AppDispatch) => {
    dispatch(themesSlice.actions.getThemeFetching());
    themeAPI
        .getTheme(name)
        .then((response) => {
            localStorage.setItem('theme', response.data.name);
            dispatch(themesSlice.actions.getThemeFetchingSuccess(response.data));
        })
        .catch((error) => {
            dispatch(themesSlice.actions.getThemeFetchingError(error.message));
        });
};
