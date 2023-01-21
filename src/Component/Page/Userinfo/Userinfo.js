
import React, { useContext } from 'react';
import { AuthProvider } from '../../Context/Context';
import toast, { Toaster } from 'react-hot-toast';
import './Userinfo.css'

const Userinfo = () => {

    const { user  } = useContext(AuthProvider);

    // user info
    const { displayName, email, photoURL } = user;

 
  

  


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="profile-user2 text-center">
                            <div className="image-user-2 ">
                                {
                                    photoURL ? <img src={photoURL} alt="" /> : <h5>Please Upload your Profile image</h5>
                                }

                            </div>
                            <h5>Name : {displayName}</h5>
                            <p>Email : {email}</p>
                        </div>

                    </div>
                    
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Userinfo;