import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Context/Context';
import './PraviteRout.css'
const PrivetRoute = ({ children }) => {
    const { user, loder } = useContext(AuthProvider)
    const location = useLocation()
   
    if (loder) {
        return (
                    <div className='spanier text-center '>
                        <div className="spanier-center spinner-grow" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
        

                )
    }

    if (user) {
        return children
    } else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivetRoute;