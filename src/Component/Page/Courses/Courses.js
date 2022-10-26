import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './Courses.css'

const Courses = () => {
    const data = useLoaderData()
    const nagavite = useNavigate()
    const handaler =(id)=>{
        nagavite(`/singlecours/${id}`)
    }
    return (
        <div className='container'>
            <div className="row">
                {
                    data.map(course => <div key={course.id} className="col-md-4">
                        <div onClick={()=>handaler(course.id)} className="course">
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
    );
};

export default Courses;