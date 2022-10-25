import React from 'react';
import './Home.css'
import { FaCameraRetro ,FaDesktop,FaHandshake,FaFileAlt} from 'react-icons/fa';
const Home = () => {
    return (
        <div>
            {/* hero area */}
            <section className='hero-area '>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero">
                                <h4>START LEARNING FROM HOME</h4>
                                <h2>Connect With Our Expert And <br /> Start Learning Today</h2>
                                <p >We are providing high-quality online courses to improve your skill. Our all <br/> instructors are highly experienced and experts.</p>
                                <button>FIND COURSES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* career track  */}
            <section className='career-area text-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h1 className='career-title'>Why is career track the best?</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="career">
                                <i><FaCameraRetro></FaCameraRetro></i>
                                
                                <h3>Content created by industry experts</h3>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="career">
                                <i><FaFileAlt></FaFileAlt></i>
                                <h3>Practical projects and assignments</h3>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="career">
                                <i><FaHandshake></FaHandshake></i>
                                <h3>Direct support from mentors</h3>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="career">
                               <i><FaDesktop></FaDesktop></i>
                                <h3>Ease of learning from anywhere</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Instructors */}
            <section className='instructors-area text-center' > 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h1 className='career-title'>Why is career track the best?</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="instructors">
                                <img src="https://themehoster.com/tf/glomex/omexo/assets/images/instructor-1.jpg" alt="" />
                                <h2>Shane Warne</h2>
                                <p>Instructors</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="instructors">
                                <img src="https://themehoster.com/tf/glomex/omexo/assets/images/instructor-2.jpg" alt="" />
                                <h2>Avelina Smith</h2>
                                <p>Instructors</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="instructors">
                                <img src="https://themehoster.com/tf/glomex/omexo/assets/images/instructor-3.jpg" alt="" />
                                <h2>John Bond</h2>
                                <p>Instructors</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="instructors">
                                <img src="https://themehoster.com/tf/glomex/omexo/assets/images/instructor-4.jpg" alt="" />
                                <h2>Sophia Smith</h2>
                                <p>Instructors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;