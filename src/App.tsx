import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import News from './pages/News/News';
import Themes from './pages/Themes/Themes';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './hooks/reduxHooks';
import {getTheme} from './store/reducers/ThemesReducer/ThemesActionCreators';
import {ThemeNameType} from './models/ThemeNameType';

export const titleMap = [
    {path: '/', title: 'Новости'},
    {path: '/themes', title: 'Темы'},
];

function App() {
    const dispatch = useAppDispatch();
    const {fetchGetTheme} = useAppSelector((state) => state.themesReducer);
    useEffect(() => {
        const name = (localStorage.getItem('theme') as ThemeNameType) || 'dark';
        dispatch(getTheme(name));
    }, []);
    if (fetchGetTheme) {
        return <div>Loading theme</div>;
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={''} element={<News />} />
                    <Route path={'/themes'} element={<Themes />} />
                    <Route path={'*'} element={<div>404 not found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
