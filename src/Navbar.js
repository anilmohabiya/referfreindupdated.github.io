import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import foot from './images/logo.png';

const Navbar =()=>{
    return(
      <>
      <div className="row color">
      <div className=" col- col-md-6 mx-auto">
      <div className="textbox">
<p class="alignleft p-2 px-4">call-us +91000000 <span className="p-3">CONTACT US</span></p>

</div>
</div>

<div className=" col- col-md-6 mx-auto">

<p class="aligncenter mr-3 p-2">Bharani-BDH <span className="p-1"><i class="fa fa-globe" aria-hidden="true"></i> Launguage-EN <i class="fas fa-angle-down"></i> 
<span className=""> sign in</span></span> </p>

<p></p>
</div>
</div>
 

      <div className="container-fluid nav_bg">
      <div className="row">
      <div className="col-md-10 col-12 mx-auto">
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <NavLink to="#" class="navbar-brand">
            <img src={foot} height="100" alt="CoolBrand"/>
              
        </NavLink> 
    
        <div class="dropdown mt-1 p-3 mr-5">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   All
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link class="dropdown-item" to="#">Action</Link>
    <Link class="dropdown-item" to="#">Another action</Link>
    <Link class="dropdown-item" to="#">Something else here</Link>
  </div>
</div>
      
    <button className="navbar-toggler" type="button"
     data-toggle="collapse" data-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
   

      <form class="form-inline pull-xs-right mt-3 mr-3">
     
    <input class="form-control" type="text" placeholder="Search"/>
   
  </form>

        <li className="nav-item">
          <NavLink  className="nav-link" to="">
          <i class="fa fa-user" aria-hidden="true"></i> Profile</NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          exact
           className="nav-link active" aria-current="page" to="/"><i class="fa fa-heart" aria-hidden="true"></i> Wishlist</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</NavLink>
        </li>
       
      
      </ul>
 
    </div>
  </div>
</nav>
      
      </div>
      </div>
      </div>
      </>
    );
};
export default Navbar;