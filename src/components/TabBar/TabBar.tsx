import React, {FC} from 'react';
import classes from './TabBar.module.scss';
import {ReactComponent as NewsIcon} from '../../assets/img/icons/Order_fill.svg';
import {ReactComponent as SettingsIcon} from '../../assets/img/icons/Setting_fill.svg';
import {NavLink, useLocation} from 'react-router-dom';
import {useAppSelector} from '../../hooks/reduxHooks';
import {titleMap} from '../../App';

const TabBar: FC = () => {
    const {currentTheme} = useAppSelector((state) => state.themesReducer);
    const currentLocation = useLocation();
    const fillForBtn = (path: string) => {
        return currentLocation.pathname === path
            ? currentTheme?.textColor || '#000'
            : currentTheme?.secondColor || '#606060';
    };
    return (
        <div className={classes.wrapper} style={{backgroundColor: currentTheme?.mainColor}}>
            <nav className={classes.nav}>
                <NavLink to={'/'}>
                    <NewsIcon fill={fillForBtn('/')} />
                </NavLink>
                <NavLink to={'/themes'}>
                    <SettingsIcon fill={fillForBtn('/themes')} />
                </NavLink>
            </nav>
        </div>
    );
};

export default TabBar;
