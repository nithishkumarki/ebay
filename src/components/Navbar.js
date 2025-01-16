import React from "react";
import './Navbar.css';
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

function Navbar()
{
    return(
        <div className="navbar-container">
           <div className="nav-container-left">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ebay-icon.png"
           />
           </div>
           <div className="nav-container-mid">
            <input type="text" placeholder="search the product">
           </input>
            <IoMdSearch/>
           </div>
           <div className="nav-container-right">
           <IoIosNotificationsOutline/>
            <IoCartOutline/>
           

           </div>
        </div>
    );
}

export default Navbar;