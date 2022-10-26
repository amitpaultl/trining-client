import React, { createContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './SingleCourse.css'
import { FaChrome ,FaCentercode} from 'react-icons/fa';
export const AddcardProvider = createContext()

const SingleCourse = () => {
    const nagvite = useNavigate()
    const data = useLoaderData();
    const {id, name,about,author,balance,ditles,picture,deration,larne}=data;

    const card = (id)=>{
        nagvite(`/checkout/${id}`)
    } 
    return (
        <div className="single-course ">

            <div className='container'>
                <div className="row">
                    <div className="col-md-7">
                        <div className="course-description">
                            <div className="course-title">
                                <h2>{name}</h2>
                                <p>{about}</p>
                            </div>
                            <h3>Instructor</h3>
                            <div className="course-instructor d-flex">
                                <div className="image-instructor">
                                    <img src={author[0].picture} alt="" />
                                </div>
                                <div className="instructor-dis">
                                    <h4>{author[0].name}</h4>
                                    <p>{author[0].about}</p>
                                </div>
                            </div>
                            <h3>What you will learn from this course</h3>
                            <div className="learn-itcourse">
                                <ul>
                                    <li>{larne[0].about}</li>
                                    <li>{larne[0].about2}</li>
                                    <li>{larne[0].about3}</li>
                                </ul>
                            </div>
                            <h3>About the course</h3>
                            <p className='about'>{ditles}</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="course-fee">
                            <img src={picture} alt="" />
                            <div className="course-fee-datales">
                                <h4>Price {balance}</h4>
                                <AddcardProvider.Provider value={data}>
                                    <button onClick={()=>card(id)}>ADD CARD</button>  
                                </AddcardProvider.Provider>
                                
                                <div className="overviwe d-flex justify-content-between">
                                    <div className="quiche">
                                        <p>Have quiche</p>
                                        <p><FaChrome></FaChrome><span className='ms-2'>{deration[0].cuise}</span></p>
                                    </div>
                                    <div className="video">
                                        <p>Have Video</p>
                                        <p><FaCentercode/> <span className='ms-2'>{deration[0].video}</span></p>
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

export default SingleCourse;