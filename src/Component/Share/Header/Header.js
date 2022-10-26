import React, { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Context/Context';
import './Header.css'
import toast, { Toaster } from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const {user,logOut} = useContext(AuthProvider);

    // sing out 
    const singOut =()=>{
        logOut() 
        .then(() => {
            toast.success('Successfully log out')
          }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            toast.error(errorMessage)
          });
    }
   console.log(user);
    return (
        <div className="menu-area">
            <Navbar>
                <Container>
                    <Navbar.Brand> <Link to={'/'} className='logo'>SECRET</Link> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to={'/'} className='menu'>Home</Link>
                            <Link to={'/course'} className='menu'>Course</Link>
                            <Link to={'/blog'} className='menu'>Blog</Link>
                            <Link className='menu'>Fiq</Link>
                            {
                                user?.uid ? <>
                                    <Link className='menu coustom' onClick={singOut}  >Log Out</Link>
                                    {
                                        user?.photoUR ? <img title={user.displayName} className='pofile-img' src={user.photoURL} alt="" />:<span className='pofile-icon' title={user.displayName}><FaUser/></span>
                                        
                                    }
                                    

                                </>
                                    :
                                    <>
                                        <Link className='menu coustom' to={'/login'}>Login</Link>
                                        <Link className='menu coustom' to={'/singup'}>Sing up</Link>
                                    </>

                            }




                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Toaster />
        </div>

    );
};

export default Header;