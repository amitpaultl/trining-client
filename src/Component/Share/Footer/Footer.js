import React from 'react';
import { FaFacebookF, FaFacebookMessenger, FaGithub, FaInstagram } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer">
                            <h2>Subscribe To Our Newsletter</h2>
                            <p>Phasellus nec dolor.Sed ornare semper ipsum. Sed pede orci volutpat sed congue vels gravida non lacus.</p>
                            <div className="subscript">
                                <input type="" />
                                <button>Subscript</button>
                            </div>
                            <div className="social-midea">
                                <li><a href="#" target={"_blank"}><FaFacebookF></FaFacebookF></a></li>
                                <li><a href="#" target={"_blank"}><FaGithub></FaGithub></a></li>
                                <li><a href="#" target={"_blank"}><FaFacebookMessenger></FaFacebookMessenger></a></li>
                                <li><a href="#" target={"_blank"}><FaInstagram></FaInstagram></a></li>
                                
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;