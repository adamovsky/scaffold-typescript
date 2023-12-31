import { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Spinner from 'components/Spinner';
import MainLayout from 'layouts/MainLayout';

import { FunctionComponent, Props } from './types';

const loading = <Spinner />;

const App: FunctionComponent<Props> = () => (
    <BrowserRouter>
        <Suspense fallback={loading}>
            <Routes>
                <Route element={<MainLayout />} path="/*" />
            </Routes>
        </Suspense>
    </BrowserRouter>
);

export default App;
