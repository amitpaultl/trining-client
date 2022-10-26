import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../Page/Blog/Blog';
import CheckOut from '../../Page/CheckOut/CheckOut';
import Courses from '../../Page/Courses/Courses';

import Home from '../../Page/Home/Home';
import Login from '../../Page/Login/Login';
import SingleCourse from '../../Page/SingleCourse/SingleCourse';
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
                path: '/course',
                element:<Courses></Courses>,
                loader: () => fetch('https://serve-data.vercel.app/course/')
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/checkout/:id',
                element:<CheckOut></CheckOut>,
                loader:({params}) => fetch(`https://serve-data.vercel.app/course/${params.id}`)
            },
            {
                path: '/singlecours/:id',
                element:<SingleCourse></SingleCourse>,
                loader:({params}) => fetch(`https://serve-data.vercel.app/course/${params.id}`)
            },
        ]
    }
])