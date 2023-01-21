import React, { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthProvider } from '../../Context/Context';
import './Header.css'
import toast, { Toaster } from 'react-hot-toast';
import { FaUser, FaRegMoon, FaSun } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
    const { user, logOut } = useContext(AuthProvider);

    // sing out 
    const singOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully log out')
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }

    // toggle class add

    const [color, setColor] = useState(true)

    const theme = () => {
        setColor(current => !current);
    }


    return (
        <div className="menu-area">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand> <Link to={'/home'} className='logo'>SECRET</Link> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        
                            
                            <NavLink to={'/home'} className={({isActive})=> isActive ? 'active menu' : 'menu'}>Home</NavLink>
                            <NavLink to={'/course'} className='menu'>Course</NavLink>
                            <NavLink to={'/blog'} className='menu'>Blog</NavLink>
                            <NavLink to={'/faq'} className="menu">FAQ</NavLink>

                            {
                                user?.uid ? <>
                                    <Link className='menu coustom' onClick={singOut}  >Log Out</Link>
                                    <Link to={'/user'}>
                                    

                                        {
                                            user?.photoURL ? <img title={user.displayName} className='pofile-img' src={user.photoURL} alt="" /> : <span className='pofile-img' title={user.displayName}><FaUser /></span>

                                        }
                                    </Link>
                                </>
                                    :
                                    <>
                                        <Link className='menu coustom' to={'/login'}>Login</Link>
                                        <Link className='menu coustom' to={'/singup'}>Sing up</Link>
                                    </>

                            }
                            {/* toggle class add */}
                            <Link className='menu' onClick={theme}>
                                {
                                    color ? <FaRegMoon /> : <FaSun />
                                }
                            </Link>

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Toaster />


        </div>

    );
};

export default Header;