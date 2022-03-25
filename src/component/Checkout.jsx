import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Checkout = () => {
    const state = useSelector((state)=> state.handleCart)

    var total = 0;
    var harga = 0;
    const itemList = (product) => {
        total = total + product.price
        harga = product.qty * product.price
        return(
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{product.title}</h6>
                    <span className="text-muted">{product.qty} x $ {product.price}</span>
                </div>
                <span className="text-dark fst-normal">$ {harga}</span>
            </li>
        )
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last"><br></br><br></br>
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="display-6">Order summary</span>
                            <span className="badge bg-dark rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group ">
                            {state.map(itemList)}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total</span>$ {total}
                            </li>
                        </ul>
                        <br></br>
                        <NavLink to='/success' className="btn btn-dark btn-lg w-100" type="submit">Continue to checkout</NavLink><br></br>
                        <NavLink to='/products' className="btn btn-outline-dark btn-lg w-100" type="submit">Back Shopping</NavLink>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Checkout;