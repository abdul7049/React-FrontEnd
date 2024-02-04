import React from 'react'
import product1 from "../../images/pump.png";
import './ProductsCart.css'
import { useNavigate } from 'react-router-dom';
const ProductsCart = () => {

    const navigate = useNavigate();
    const handleClick = () => {
      // Navigate to a different page
      navigate('/productinfo');
    };
  return (
   <>
    <div className="card">



<div className="image">
    <img src={product1}/>
</div>

<div className="products_text">
    <h2>Pump</h2>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </p>
    <h3>Rs 1000/-</h3>
    <div className="products_star">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
    </div>
    <button className='btn' onClick={handleClick}>Explore</button>
</div>

</div>
   </>
  )
}

export default ProductsCart
