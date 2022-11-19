import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={''} element={<div>asd</div>} />
                    <Route path={'/themes'} element={<div>themes</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
