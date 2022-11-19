import React, {FC} from 'react';
import classes from './MainLayout.module.scss';
import Header from '../../components/Header/Header';
import TabBar from '../../components/TabBar/TabBar';
import {Outlet} from 'react-router-dom';

interface MainLayoutProps {
    children?: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <div>
            <Header />
            <Outlet />
            <TabBar />
        </div>
    );
};

export default MainLayout;
