import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; // Import our new theme

// Import the main layout and page components
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import HealthInfoPage from './pages/HealthInfoPage';
import PredictionPage from './pages/PredictionPage'; // Import the new page
import AboutPage from './pages/AboutPage'; // We can keep the About page or remove it

// Define your application's routes
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
        path: 'health-insights', // Use a more descriptive path
        element: <HealthInfoPage />,
      },
      {
        path: 'predict', // Add the route for the new page
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
      {/* CssBaseline resets browser styles for consistency */}
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);