
import React from "react";
import "./details.css"
import { useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Heart from '../assets/Heart.svg'
import cart from '../assets/cart.svg'
import admin from '../assets/admin.svg'
export default function ItemDetail() {
    const location=useLocation()
    const x=location.state
    console.log(x);
  return (
    <>
    <div className="free">
    <h1>FREE DELIVERIES. FREE RETURNS.</h1>
    </div>

    <nav class="navbar background">
        <div class="logo">HANO</div>

        <ul class="nav-list">
        
            <li><a href="#new">New</a></li>
            <li><a href="#women">Women</a></li>
            <li><a href="#men">Men</a></li>
            <li><a href="#luka">Luka x HANO</a></li>
            <li><a href="#sports">sports</a></li>
        
        </ul>

        <div class="rightnav">
            <input type="text" 
                   name="search" 
                   id="search"
                  />

            {/* <button class="btn btn-sm">Search</button> */}
        </div>
        <div className="icon">

<img src={Heart} alt="" />
<img src={cart} alt="" />
<img src={admin} alt="" />

</div>

    </nav>
    <p className="ti">{x.title}</p>
    <div className="image">
       
    <img src={x.thumbnail} alt="images" className="img1" /></div>
    
<p className="des">{x.description}</p>
<p className="brand">{x.brand}</p>
<div className="two">
<p className="rate">{x.rating}</p>
<div className="star">
<ReactStars
   value={x.rating}
    count={5}
    size={24}
    activeColor="orange"
  /></div></div>
  <div className="hrz">
 <hr /></div>
<p className="deal">Limited time deal</p>
<div className="price">
<p>${x.price}</p>
<p className="policy">{x.returnPolicy}</p></div>

<div className="hrz2">
 <hr /></div>
<p className="add">Purchase options and add-ons</p>
<div className="hrz3">
 <hr /></div>
<p className="tag">{x.tags}</p>
<p className="category">{x.category}</p>
<div className="hrz2">
 <hr /></div>
 <div className="information">
  <p className="products">product information</p>
<p><b className="info">BRAND </b>{x.brand}</p>
<p><b className="info">SKU</b>  {x.sku}</p>
<p><b className="info">WEIGHT</b> {x.weight}</p>
<p><b className="info">STOCK</b> {x.stock}</p>
<p><b className="info">WAREANTY INFORMATION</b> {x.warrantyInformation}</p>
<p><b className="info">SHIPPING INFORMATION</b> {x.shippingInformation}</p>
<p><b className="info">AVAILABILITY STATUS</b> {x.availabilityStatus}</p>

</div>
<div className="buttons">
    <div className="bt1">
<p>ADD TO CART</p></div>
<div className="bt2">
<p>BUY NOW</p>
</div></div>
<div className="hrz4">
 <hr /></div>

 <p className="heading">Reviews</p>
      <div className="reviews">
        {x.reviews.map((review, index) => (

           <div className="review">
            <p className="name"><b>ReviewerName:</b> {review.reviewerName}</p>
            <p className="rating"><b>Rating:</b> {review.rating}</p>
            <p className="comment"><b>Comment:</b> {review.comment}</p>
            <p className="date"><b>Date:</b> {review.date}</p>
            <p className="email"><b>Email: </b>{review.reviewerEmail}</p><br /><hr className="hrz5" /><br />

            </div>
            

         ))}</div>



</>
  );
}
