import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Success() {
  return (
    <div className='home'>
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center">
          <img src="/assets/checkout.png" className="payment" width={350} alt=""></img>
        </div>
        <div className="col-md-4">
          <br></br><br></br>
          <p>Your Payment Was Successfull</p>
          <p className='lead'>Thank you for shopping with us and we hope we see you soon. </p>

          <NavLink to='/home' className="btn btn-dark btn-lg w-100" type="submit">Back to Home</NavLink>
        </div>
      </div>
    </div>
  )
}
