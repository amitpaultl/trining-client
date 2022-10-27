import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import './Courses.css'

const Courses = () => {
    // loade data api url
    const data = useLoaderData()

    // nagavite lode function
    const nagavite = useNavigate()

    // nagavite single page
    const handaler =(id)=>{
        nagavite(`/singlecours/${id}`)
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="course-title minge">
                        {/* map course title  */}
                        {
                           data.map(course => <li className='cou-title' key={course.id}><span onClick={()=>handaler(course.id)}>{course.name}</span></li> ) 
                        }
                    </div>

                </div>
                <div className="col-md-6 col-lg-9">
                    <div className="row">
                        {/* map course   */}
                        {
                            data.map(course => <div key={course.id} className="col-md-12 col-lg-4">
                                <div onClick={()=>handaler(course.id)} className="course ">
                                    <img src={course.picture} alt="" />
                                    <div className="p-4">
                                        <h3>{course.name}</h3>
                                        <div className="d-flex justify-content-between">
                                            <h4>Price: {course.balance}</h4>
                                            <h5>Deities</h5>
                                        </div>
                                    </div>

                                </div>
                            </div>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Courses;