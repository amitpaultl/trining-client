import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProvider } from '../../Context/Context';
const ForgetPassword = () => {
    // navigete
    const nayigate = useNavigate();

   

    // context api handaling
    const {forgetpassword} = useContext(AuthProvider)

    // forget input submit login handaler
    const headaler = (e) =>{
        e.preventDefault()
       const comon = e.target
       const email = comon.email.value;
      
        // forget user email
        forgetpassword(email)
        .then(() => {
            toast.success('Please check your email / Do not worry if the email goes to the spam folder ');
            
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)
            // ..
          });

      
    }

  

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="form-area">
                        <h1 className='text-center my-4'>Forget PassWord</h1>
                        <form onSubmit={headaler}>
                            <div className="input-area">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="" required/>
                            </div>
                            
                            <button className='sinup'>Sing Up</button>
                        </form>
                      
                    
                        
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};


export default ForgetPassword;