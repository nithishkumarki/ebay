import React from "react";
import './Banner.css';
function Banner()
{
    return(
        <div className="Banner-Container">
            <img src="https://i.ebayimg.com/images/g/~i0AAOSwwdJnXGOb/s-l1600.jpg" />
              <div className="Banner-Container-content">
                <h2>You don't run with the crowd</h2>
                <h3>Get fit your own way with health and wellness gear on eBay.</h3>
                <button>Shop for your style</button>
              </div>
        </div>
    );
}

export default Banner;