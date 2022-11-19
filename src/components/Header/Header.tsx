import React, {FC, useEffect, useState} from 'react';
import classes from './Header.module.scss';
import {useLocation} from 'react-router-dom';
import {titleMap} from '../../App';
import {useAppSelector} from '../../hooks/reduxHooks';

const Header: FC = () => {
    const {currentTheme} = useAppSelector((state) => state.themesReducer);
    const [pageTitle, setPageTitle] = useState('');
    const currentLocation = useLocation();
    useEffect(() => {
        const currentTitle = titleMap.find((item) => item.path === currentLocation.pathname);
        if (currentTitle && currentTitle.title) {
            setPageTitle(currentTitle.title);
            document.title = currentTitle.title;
        } else {
            setPageTitle('Нет страницы');
        }
    }, [currentLocation]);
    return (
        <header className={classes.header} style={{backgroundColor: currentTheme?.mainColor}}>
            <div className={classes.title} style={{color: currentTheme?.textColor}}>
                {pageTitle}
            </div>
        </header>
    );
};

export default Header;
