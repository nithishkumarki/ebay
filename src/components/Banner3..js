import React from "react";
import './Banner2.css';
import { MdVerified } from "react-icons/md";
function Banner3()
{
    return(
        <div className="Banner-Container">
            <div className="image-container"> 
            <img src="https://i.ebayimg.com/images/g/EXMAAOSw8ipnhSmm/s-l960.webp" />
            </div>

              <div className="Banner-Container-content">
                <div className="verified-refurnished"><MdVerified /><p>Refurnished</p></div>
                <h2>Save on your everyday ally</h2>
                <p>Upgrade your smartphone and save with quality refurbished.</p>
                <button>Shop SmartMobiles</button>
              </div>
        </div>
    );
}

export default Banner3;