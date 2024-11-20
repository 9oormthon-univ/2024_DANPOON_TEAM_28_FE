import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { ThemeProvider } from '@mui/material';
import theme from './constants/theme.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
