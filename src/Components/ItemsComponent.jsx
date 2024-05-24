import React from "react";
import './items.css'
import { useState,useEffect } from "react";

export default function ItemsComponent() {
    const [items,setItems] = useState([])
    const [searchQuery, setSearchQuery] = useState('');

useEffect(()=>{
    getData()
},[])

async function getData(){
    var res=await fetch('https://dummyjson.com/products')
    var data=await res.json()
    console.log(data);
    setItems(data.products)
}

  // Function to filter items based on search query
const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
);

// Event handler for input field change
const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
};

return(

<div className="rt">
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
                   value={searchQuery}
                   onChange={handleSearchChange}/>

            <button class="btn btn-sm">Search</button>
        </div>

        {/* <div className="imgage">
        <img src= alt="heart" />
        <img src= alt="" />
        </div> */}
    </nav>

    <div className="shop">
        <p className="flat">FLAT 40% OFF ON LATEST STYLES</p>
        <p className="end">END OF THE SEASON SALE</p>
        <p className="shop"><u>SHOP NOW</u></p>
        <p className="extra">Extra 5% off on online payments</p>
    </div>

  <p className="arrivals">NEW ARRIVALS</p>

<div className="box">

<p className="filter">FILTERS (0)</p>

<select name="cars" id="cars">
  <option value="volvo">SHORT BY</option>
</select>

</div>
<hr />
<p className="product">412 PRODUCTS</p>
<div className="cardcontainer" >

   {filteredItems.map((x)=>(
   <>
    <div className="images">

    <div className="imgcont">
    <img src={x.images[0]} alt="images" className="img" />
    </div>

    <p className="title">{x.title}</p>
    <p className="price">{x.price}</p>

    </div>
    </>
    ))}
</div>

<div className="next">
        <p>NEXT</p>
    </div>

<div className="support">
    <div className="li1">
    <ul>
   <li> <b> SUPPORT</b></li>
   <li> Contact us</li>
   <li> Promotions & Sale</li>
   <li> Track Order</li>
   <li> Privacy Policy</li>
   <li>  Terms & Conditions</li>
   <li>Cookie Settings</li>
   </ul>
  </div>

    <div className="li2">
    <ul>
    <li> FAQs</li>
    <li>  My Account</li>
    <li>Return Policy</li>
    <li> Tech Glossary</li>
    <li> Initiate Return</li>
    </ul>
    </div>

    <div className="li3">
        <ul>
        <li> <b>ABOUT</b></li>
        <li> Company</li>
        <li> Corporate News</li>
        <li> Press Center</li>
        <li>Investors</li>
        <li> Careers</li>
        <li> Store Finder</li>
        </ul>
    </div>

    <p className="stay">STAY UP TO DATE</p>

</div>

<p className="india">INDIA</p>
<hr className="h1"/>
</div>  
    )
}
