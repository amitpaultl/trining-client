import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Context/Context';

const PrivetRoute = ({children}) => {
    const {user,loder} = useContext(AuthProvider)
    const location = useLocation()
    console.log(user);
    if(loder){
        return <div>Loding....</div>
    }

    if(user){
        return children
    }else{
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
};

export default PrivetRoute;