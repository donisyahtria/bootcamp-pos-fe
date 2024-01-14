import {createBrowserRouter} from 'react-router-dom'
import Login from "./pages/Login";
import Splash from './pages/Splash';
import Home from './pages/Home';

const router = createBrowserRouter ([
    {
        path : '/',
        element: <Splash/>
    },

    {
        path : '/login',
        element : <Login/>
    },

    {
        path : "/home",
        element: <Home/>
    }
])

export default router