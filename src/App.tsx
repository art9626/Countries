import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loyout from './components/Loyout';

const MainPage = React.lazy(() => import('./pages/MainPage'));
const Details = React.lazy(() => import('./pages/Details'));


const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Loyout />}>
          <Route
            index
            element={<MainPage />}
          />
          <Route
            path='country/:name'
            element={<Details />}
          />
          <Route
            path='/*'
            element={<div>Error 404: Page not found</div>}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
