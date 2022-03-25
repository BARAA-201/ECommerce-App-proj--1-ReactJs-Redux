import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div class="card bg-dark text-white border-0" >
  <img src="assets/banar1.jpg" class="card-img" alt="Background" id="back1"/>
  <div class="card-img-overlay">
    <h1 class="card-title" id="homeTitle">Welcome to BENGO, where <br></br>
    <span id="everything">everything you need is</span><br></br> 
    <span id="available">available</span></h1>
    <p class="card-text" id="homeP">Browse our categories for more specific <br></br>
    items, and add to your cart and keep browsing.
    <br></br>At any time you can visit the cart to <br></br>
    modify your shopping items and
    <br></br>proceed to the checkout.</p>
    <div className='visit'>Now, take a look at the<br></br>
    products section<br></br>
    </div>
  </div>
</div>
  )
}
