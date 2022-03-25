import React, {useState, useEffect} from 'react';
import Skeleton from "react-loading-skeleton";
import './product.css';
import { Link } from 'react-router-dom';

export default function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, []);

    const Loading = () => {
        return(
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updateList = data.filter((x)=>x.category === cat);
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return (
            <>
            <div className="buttons d-flex mb-5 pb-5">
                    <button className="btn me-2" onClick={()=>setFilter(data)}>Shop All</button>
                    <button className="btn me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4 py-4" id="p">
                                <div class="card h-100 p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="275px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,20)}...</h5>
                                        <p class="card-text lead">$ {product.price}</p>
                                        <Link to={`/products/${product.id}`} class="btn btn-dark">ADD ITEM</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )

    }

  return (
    <div className='home'>
        <div>
                <div className="row">
                    <div>
                        <p>Best Seller</p>
                        <br></br>
                    </div>
                </div>
                <div className="row">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
    </div>
  )
}

