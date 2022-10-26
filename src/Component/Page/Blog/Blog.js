import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="bolg-area">
                            <div className="single-blog">
                                <img src="https://www.oxfordlearning.com/wp-content/uploads/2018/11/group-photo-860x420.jpeg" alt="" />
                                <div className="blog-area">
                                    <h2> What is cors?</h2>
                                    <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request. It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests.</p>
                                </div>
                            </div>
                            <div className="single-blog">
                                <img src="https://s35691.pcdn.co/wp-content/uploads/2018/04/student-led-study-group-library-id842920176.jpg" alt="" />
                                <div className="blog-area">
                                    <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                                    <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. and Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                                </div>
                            </div>
                            <div className="single-blog">
                                <img src="https://www.oxfordlearning.com/wp-content/uploads/2018/11/group-photo-860x420.jpeg" alt="" />
                                <div className="blog-area">
                                    <h2>How does the private route work?</h2>
                                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in.</p>
                                </div>
                            </div>
                            <div className="single-blog">
                                <img src="https://s35691.pcdn.co/wp-content/uploads/2018/04/student-led-study-group-library-id842920176.jpg" alt="" />
                                <div className="blog-area">
                                    <h2> What is Node? How does Node work?</h2>
                                    <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. and It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="side-right">
                            <div className="search">
                                <input type="text" />
                                <button>Search</button>
                            </div>
                            <div className="recent-post">
                                <div className="more-post d-flex">
                                    <img src="https://media.istockphoto.com/photos/group-of-college-students-studying-together-picture-id1278978962?k=20&m=1278978962&s=170667a&w=0&h=Jv-IcP6f66PJ6692vpFVUL_alhfNCWwmyJ8aokPS7ag=" alt="" />
                                    <div className="title-post">
                                        <h2>Learn Webs Applications Development from Experts</h2>
                                        <p>April 1, 2022</p>
                                    </div>
                                </div>
                                <div className="more-post d-flex">
                                    <img src="https://www.thoughtco.com/thmb/Te3rYgARLyB0LXptCcPJOGkzHbI=/3415x2561/smart/filters:no_upscale()/505082395-56a4b9625f9b58b7d0d886be.jpg" alt="" />
                                    <div className="title-post">
                                        <h2>Learn Webs Applications Development from Experts</h2>
                                        <p>April 1, 2022</p>
                                    </div>
                                </div>
                                <div className="more-post d-flex">
                                    <img src="https://media.istockphoto.com/photos/group-of-college-students-studying-together-picture-id1278978962?k=20&m=1278978962&s=170667a&w=0&h=Jv-IcP6f66PJ6692vpFVUL_alhfNCWwmyJ8aokPS7ag=" alt="" />
                                    <div className="title-post">
                                        <h2>Learn Webs Applications Development from Experts</h2>
                                        <p>April 1, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;