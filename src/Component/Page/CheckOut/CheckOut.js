import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import './CheckOut.css'
const CheckOut = () => {

    // loade data api url
    const data = useLoaderData()
    const {name,picture,balance}=data

    // popup buy btu click 
    const buynow =()=>{
        swal({
            title: "Successfully buy",
            text: "Congratulation Your Shopping",
            icon: "success",
          });
    }
    
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="form-area chakOut">
                            <h1 className='text-center my-4'>Payment System</h1>
                            <form>
                                <div className="input-area">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name='name'/>
                                </div>
                                <div className="input-area">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name='email'/>
                                </div>
                                <div className="input-area">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" name='phone'/>
                                </div>
                                <div className="input-area">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name='address'/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="order-view">
                            <h2>Your order at a glance</h2>
                            <div className="product">
                                <div className="single-product d-flex justify-content-between align-items-center">
                                    <div className="product-img">
                                        <img src={picture} alt="" />
                                    </div>
                                    <p>{name}</p>
                                    <p>{balance}</p>
                                </div>
                            </div>
                            <div className="single-product d-flex justify-content-between">
                                <p>Total</p>
                                <p>{balance}</p>
                            </div>
                            <button onClick={buynow}>Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;