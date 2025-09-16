import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../Layout/Layout';
import './App.module.css'

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
            <Route
              path="catalog"
              element={<CatalogPage />}
            />
          </Route>
      </Routes>
    </>
  );
};

export default App;