import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; 


import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import HealthInfoPage from './pages/HealthInfoPage';
import PredictionPage from './pages/PredictionPage'; 
import AboutPage from './pages/AboutPage'; 


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'health-insights', 
        element: <HealthInfoPage />,
      },
      {
        path: 'predict', 
        element: <PredictionPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {}
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);