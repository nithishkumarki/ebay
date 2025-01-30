import React from 'react';
import "./TrendOnEbay.css"
function TrendOnEbay() 
{
    return (<div className="TrendOnEbay">
            <h1>Trending on eBay</h1>
            
            <div className="TrendOnEbay-items">
                 <div className="TrendOnEbay-items-item"><img src="img1.jpg"/><p>Sneakers</p></div>
                 <div className="TrendOnEbay-items-item"><img src="img2.jpg"/><p>Refurnished</p></div>
                 <div className="TrendOnEbay-items-item"><img src="img3.jpeg"/><p>Luxury</p></div>
                 <div className="TrendOnEbay-items-item"><img src="img4.jpg"/><p>P&A</p></div>
                 <div className="TrendOnEbay-items-item"><img src="img5.jpg"/><p>Cards</p></div>
                 <div className="TrendOnEbay-items-item"><img src="img6.jpg"/><p>Pre-Loved</p></div>
                 <div className="TrendOnEbay-items-item"><img src="img7.jpg"/><p>Toys</p></div>
            </div>
        </div>
    );
}


export default TrendOnEbay;