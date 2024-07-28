import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './components/error-page.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomeScreen />,
            },
            {
                path: '/login',
                element: <LoginScreen />,
            },
            {
                path: '/register',
                element: <RegisterScreen />,
            },
            {
                // private routes...
                path: '/',
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/profile',
                        element: <ProfileScreen />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);
