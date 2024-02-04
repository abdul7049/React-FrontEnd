import React from 'react'
import './Productsinfo.css'
import product1 from "../../images/pump.png";
const Productsinfo = () => {
  var ProductId = '010010101';
  return (
    <>
      <div className='product_infomain'>
        <div className='product_infoleft'>
          <img src={product1} />
        </div>
        <div className='productinforight'>
          <div className='productinforightcard'>
            <div className='infocardheading'>
              <h1>Pump</h1>
              <p>Product id#{ProductId}</p>
            </div>
            <div className='infocardreview'>
              <div className="products_star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>(2 Reviews)</p>
            </div>

            <div className='infocardprice'>
              <h3>Rs/-1000</h3>
              <div className='infocardpricebtn'>
              <i class="fa-solid fa-minus"></i>
              <p>1</p>
              <i class="fa-solid fa-plus"></i>
              <button >Add to cart</button>
              </div>
              
            </div>
            <div className='infocardstatus'>
              <h4>Status :</h4><p>In Stock</p>
            </div>
<div className='infocarddescription'>
  <h3>Description</h3>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
  <button>Submit Review</button>
</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Productsinfo
