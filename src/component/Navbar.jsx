import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./navbar.css";

export default function Navbar() {
    const state = useSelector((state)=> state.handleCart)
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info py-3">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fs-4" to="/home">
                    <img src="/assets/BENGO.png" width={65} alt=""></img> BENGO Shop
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active mb-0 h6" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active mb-0 h6" to="/products">Products</NavLink>
                            </li>
                            
                        </ul>
                        <div className="buttons">
                            <NavLink to="/cart" className="btn ms-2 solid bg-light">
                                <i className="fa fa-shopping-cart me-1 "></i> ({state.length})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
    </div>
  )
}
