import React from 'react';
import { Link } from 'react-router-dom';
import './SingUp.css'
import { FaGoogle, FaGithub } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthProvider } from '../../Context/Context';

const SingUp = () => {
    // context api handaling
    const { emailsingup,googleSingup,gitgubSingUp, profile } = useContext(AuthProvider)
    
    // Email input submit handaler
    const headaler = (e) => {
        e.preventDefault()
        e.preventDefault()
        const comon = e.target
        const firstname = comon.firstname.value;
        const lastname = comon.lastname.value;
        const url = comon.url.value;
        const email = comon.email.value;
        const password = comon.password.value;
        const conformpassword = comon.conformpassword.value;
        const fullName = firstname + ' ' + lastname;
        // check password
        if (password != conformpassword) {
            toast.error('Your password is not same')
            return
        }
        // create user email
        emailsingup(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                profiles(fullName, url)
                toast.success('Successfully Sign Up')
                
                console.log(user);
                // nayigate('/')
            })
            .catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }

    // google sing Up
    const googlesingup =()=>{
        googleSingup()
        .then((result) => {
            const user = result.user;
            console.log(user);
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            toast.error(errorMessage)
          });
    }

    // github Sing up
    const githubSing=()=>{
        gitgubSingUp()
        .then((result) => {
            const user = result.user;
            console.log(user);
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            toast.error(errorMessage)
            // ...
          });
    }

    // profile update
    const profiles =(name, url)=>{
        profile(name, url)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="form-area">
                        <h1 className='text-center my-4'>Sign Up</h1>
                        <form onSubmit={headaler}>
                            <div className="input-area">
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" name="firstname" id="" />
                            </div>
                            <div className="input-area">
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" name="lastname" id="" />
                            </div>
                            <div className="input-area">
                                <label htmlFor="url">Image Url</label>
                                <input type="text" name="url" id="" />
                            </div>
                            <div className="input-area">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="" required />
                            </div>
                            <div className="input-area">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="" />
                            </div>
                            <div className="input-area">
                                <label htmlFor="conformpassword">Conform Password</label>
                                <input type="password" name="conformpassword" id="" />
                            </div>
                            <button className='sinup'>Sing Up</button>
                        </form>
                        <div className="account">
                            <p>Already have an account? <Link to={'/login'}>Login</Link> </p>
                        </div>
                        <hr />
                        <div className="popup-login">
                            <button onClick={googlesingup}><FaGoogle />  Continue with Google </button>
                            <button onClick={githubSing}><FaGithub />  Continue with GitHub </button>
                        </div>

                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default SingUp;