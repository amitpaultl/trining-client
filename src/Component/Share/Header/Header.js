import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Context/Context';
import './Header.css'
import toast, { Toaster } from 'react-hot-toast';
import { FaUser, FaRegMoon, FaSun } from 'react-icons/fa';
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch';
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
                    <Navbar.Brand> <Link to={'/'} className='logo'>SECRET</Link> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to={'/'} className='menu'>Home</Link>
                            <Link to={'/course'} className='menu'>Course</Link>
                            <Link to={'/blog'} className='menu'>Blog</Link>
                            <Link to={'/faq'} className="menu">FAQ</Link>

                            {
                                user?.uid ? <>
                                    <Link className='menu coustom' onClick={singOut}  >Log Out</Link>

                                    {
                                        user?.photoURL ? <img title={user.displayName} className='pofile-img' src={user.photoURL} alt="" /> : <span className='pofile-img' title={user.displayName}><FaUser /></span>

                                    }

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