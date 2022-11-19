import React, {FC} from 'react';
import classes from './Themes.module.scss';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {getTheme} from '../../store/reducers/ThemesReducer/ThemesActionCreators';

const Themes: FC = () => {
    const {currentTheme} = useAppSelector((state) => state.themesReducer);
    const dispatch = useAppDispatch();

    return (
        <div className={classes.wrapper} style={{backgroundColor: currentTheme?.mainColor}}>
            <div
                style={{backgroundColor: currentTheme?.secondColor, color: currentTheme?.textColor}}
                className={classes.btn}
                onClick={() => dispatch(getTheme('dark'))}
            >
                <span>Тема 1 {currentTheme?.name === 'dark' && 'Используется'}</span>
            </div>
            <div
                style={{backgroundColor: currentTheme?.secondColor, color: currentTheme?.textColor}}
                className={classes.btn}
                onClick={() => dispatch(getTheme('light'))}
            >
                <span>Тема 1 {currentTheme?.name === 'light' && 'Используется'}</span>
            </div>
            <div
                style={{backgroundColor: currentTheme?.secondColor, color: currentTheme?.textColor}}
                className={classes.btn}
                onClick={() => dispatch(getTheme('blue'))}
            >
                <span>Тема 1 {currentTheme?.name === 'blue' && 'Используется'}</span>
            </div>
        </div>
    );
};

export default Themes;
