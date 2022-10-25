import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../Page/Blog/Blog';
import Courses from '../../Page/Courses/Courses';

import Home from '../../Page/Home/Home';
import Login from '../../Page/Login/Login';
import SingUp from '../../Page/SingUp/SingUp';
import Root from '../../Root/Root';

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/singup',
                element:<SingUp></SingUp>
            },
            {
                path: '/courses',
                element:<Courses></Courses>
            },
            {
                path: '/',
                element:<Blog></Blog>
            },
        ]
    }
])