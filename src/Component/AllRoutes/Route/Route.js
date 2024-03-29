import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../Page/Blog/Blog';
import CheckOut from '../../Page/CheckOut/CheckOut';
import Courses from '../../Page/Courses/Courses';
import Error from '../../Page/Error/Error';
import Faq from '../../Page/Faq/Faq';
import Home from '../../Page/Home/Home';
import ForgetPassword from '../../Page/Login/ForgetPassword';
import Login from '../../Page/Login/Login';
import SingleCourse from '../../Page/SingleCourse/SingleCourse';
import SingUp from '../../Page/SingUp/SingUp';
import Userinfo from '../../Page/Userinfo/Userinfo';
import Root from '../../Root/Root';
import PrivetRoute from '../PrivetRoute/PrivetRoute';

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/home',
                element:<Home></Home>
            },
            {
                path: '/faq',
                element:<Faq></Faq>
            },
            {
                path: '/user',
                element:<PrivetRoute><Userinfo></Userinfo></PrivetRoute> 
            },
            {
                path: '/forgetpass',
                element:<ForgetPassword></ForgetPassword>
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
                element:<PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
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