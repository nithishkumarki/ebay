import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer'>

            <div className='footer-row'>

                <div className='footer-column'>
                    <h3>Buy</h3>
                    <ul>
                        <li>Registration</li>
                        <li>Bidding & buying help</li>
                        <li>Stores</li>
                        <li>eBay for Charity</li>
                        <li>Charity Shop</li>
                        <li>Seasonal Sales and events</li>
                        <li>eBay Gift Cards</li>
                    </ul>
                </div>

                <div className='footer-column'>
                    <h3>Sell</h3>
                    <ul>
                        <li>Start selling</li>
                        <li>How to sell</li>
                        <li>Business sellers</li>
                        <li>Affiliates</li>
                    </ul>
                    <h3>Tools & apps</h3>
                    <ul>
                        <li>Developers</li>
                        <li>Security center</li>
                        <li>Site map</li>
                    </ul>
                </div>

                <div className='footer-column'>
                    <h3>eBay companies</h3>
                    <ul>
                        <li>TCGplayer</li>
                    </ul>
                    <h3>Stay connected</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>X (Twitter)</li>
                    </ul>
                </div>

                <div className='footer-column'>
                    <h3>About eBay</h3>
                    <ul>
                        <li>Company info</li>
                        <li>News</li>
                        <li>Deferred Prosecution Agreement with District of Massachusetts</li>
                        <li>Investors</li>
                        <li>Careers</li>
                        <li>Diversity & Inclusion</li>
                        <li>Global Impact</li>
                        <li>Government relations</li>
                        <li>Advertise with us</li>
                    </ul>
                    
                </div>

                <div className='footer-column'>
                    <h3>Help & Contact</h3>
                    <ul>
                        <li>Seller Center</li>
                        <li>Contact Us</li>
                        <li>eBay Returns</li>
                        <li>eBay Money Back Guarantee</li>
                    </ul>
                    <h3>Community</h3>
                    <ul>
                        <li>Announcements</li>
                        <li>eBay Community</li>
                        <li>eBay for Business Podcast</li>
                    </ul>
                    <h3>eBay Sites</h3>
                    <ul>
                        <li>United States</li>
                    </ul>
                </div>
            </div>

            <div className='footer-bottom'>
                <p>Copyright © 1995-2025 eBay Inc. All Rights Reserved.</p>
                <p>Accessibility, User Agreement, Privacy, Consumer Health Data, Payments Terms of Use, Cookies, CA Privacy Notice, Your Privacy Choices and AdChoice</p>
            </div>

        </div>
    );
};

export default Footer;