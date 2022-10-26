import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle ,FaGithub} from 'react-icons/fa';
import { useContext } from 'react';
import { AuthProvider } from '../../Context/Context';
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
    // navigete
    const nayigate = useNavigate();
    // loding 
    const location = useLocation();
    // location navigete
    const from = location.state?.from?.pathname || '/';
    // context api handaling
    const {singinemail,googlelogin,githubLogin} = useContext(AuthProvider)
    // Email input submit login handaler
    const headaler = (e) =>{
        e.preventDefault()
       const comon = e.target
       const email = comon.email.value;
       const password = comon.password.value;
        // login user email
       singinemail(email, password)
       .then((userCredential) => {
        const user = userCredential.user;
        nayigate(from,{replace:true})
        
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        toast.error(errorMessage)
      });
    }

    // google sing in
    const googlesiLogin =()=>{
        googlelogin()
        nayigate(from,{replace:true})
    }

    // github Login
    const githubin =()=>{
        githubLogin()
        nayigate(from,{replace:true})
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="form-area">
                        <h1 className='text-center my-4'>Login</h1>
                        <form onSubmit={headaler}>
                            <div className="input-area">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="" required/>
                            </div>
                            <div className="input-area">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="" required />
                            </div>
                            <button className='sinup'>Sing Up</button>
                        </form>
                        <div className="account">
                            <p>New Secret ? <Link to={'/singup'}>Create New Account </Link> </p>
                            <Link>Forget password</Link>
                        </div>
                            <hr />
                        <div className="popup-login">
                            <button onClick={googlesiLogin}><FaGoogle/>  Continue with Google </button>
                            <button onClick={githubin}><FaGithub/>  Continue with GitHub </button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;