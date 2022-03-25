import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {addCart} from '../redux/action';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router';
import { NavLink } from "react-router-dom";

export default function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
      dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

  const Loading = () => {
    return(
      <>
        <div className='col-md-6'>
           <Skeleton height={400}/>
        </div>
        <div className='col-md-6' style={{lineHeight:2}}>
           <Skeleton height={50} width={300}/>
           <Skeleton height={75}/>
           <Skeleton height={25} width={150}/>
           <Skeleton height={50}/>
           <Skeleton height={150}/>
           <Skeleton height={50} width={100}/>
           <Skeleton height={50} width={100} style={{marginLeft:6}}/>
        </div>
      </>
    )
  }

  const ShowProduct = () => {
    return(
      <>
        <div className='col-md-6'>
          <br></br>
            <img src={product.image} alt={product.title} height="400px" width="400px"></img>
        </div>
        <div className='col-md-6'>
            <p className='lead text-black-50'>
              {product.category}
            </p>
            <p className='lead my-1'>
              {product.rating && product.rating.rate} <i className='fa fa-star'></i>
            </p>
            <h1 className='display-5'>{product.title}</h1>
            <h3 className='display-4 my-4'>
              $ {product.price}
            </h3>
            <br></br>
            <h5>PRODUCT DESCRIPTION</h5>
            <p className='lead'>{product.description}</p><br></br>
            <div class="d-grid gap-2">
            <button class="btn btn-dark" onClick={()=>addProduct(product)}>ADD TO CART</button>
            <NavLink to="/cart" class="btn btn-dark fw-bold" type="button">View Cart</NavLink>
            <NavLink to="/products" class="btn btn-dark fw-bold" type="button">Continue Shopping</NavLink>
          </div>
          
          
        </div>
      </>
    )
  }

  return (
    <div>
      <div className='container py-5'>
        <div className='row py-4'>
          {loading ? <Loading /> : <ShowProduct/>}
        </div>
      </div>

    </div>
  )
}
