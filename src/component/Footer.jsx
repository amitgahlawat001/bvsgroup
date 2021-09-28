import React, {useMemo} from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { socialMedia } from './socialMediaData';

function Footer() {
    const socialMediaLinks = useMemo(() => {
        return socialMedia.map((item) => <Link>
            {item.socialLogo}
        </Link>)
    })

    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-text'>
                    Stay In<span>Touch</span>
                </p>
                <div className='input-areas'>
                    <input
                        className='footer-input'
                        name='email'
                        type='email'
                        placeholder='Your Email'
                    />
                    <button type='submit' className='footer-submit-btn'>Submit</button>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Quick <span>Links</span></h2>
                        <Link to='/AboutUs'>About Us</Link>
                        <Link to='/Clients'>Clients</Link>
                        <Link to='/Careers'>Careers</Link>
                        <Link to='/Contact'>Contact</Link>
                        
                    </div>
                    <div class='footer-link-items'>
                        <h2>Services</h2>
                        <Link to='/SeaFreightForwarding'>Sea Freight Forwarding</Link>
                        <Link to='/CustomClearance'>Custom Clearance</Link>
                        <Link to='/EXIM'>EXIM Consultancy</Link>
                        <Link to='/torageDistribution'>Storage & Distribution</Link>
                        <Link to='/OutboundGroupage'>Outbound Groupage</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <Link to='/AirFreightForwarding'>Air Freight Forwarding</Link>
                        <Link to='/DoorToDoorLogistics'>Door to Door Logistics</Link>
                        <Link to='/RoadTransportation'>Road Transportation</Link>
                        <Link to='/WorldWideGroupage'>World Wide Groupage</Link>
                        <Link to='/InboundGroupage'>Inbound Groupage</Link>
                    </div>
                    <div class='footer-link-wrapper'>
                        <div className="footer-link-items">
                            <h2>Locate <span>Us</span></h2>
                            <i class="fas fa-map-marker-alt">  252 F, Second Floor, Sant Nagar,
                                East of Kailash,
                                New Delhi - 110065, INDIA</i>
                            <i class="fas fa-phone-alt">  +91-11-46527314, +91-11-26414598</i>
                            <i class="fas fa-envelope"><Link>info@contransgroup.com</Link></i>
                        </div>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <small class='website-rights'>Copyright © 2014-15 Contain Group. All Rights Reserved</small>
                    <p>
                        <Link>Privacy Policy  </Link>|
                        <Link>   Terms Of Use</Link>
                    </p>
                    {socialMediaLinks}

                </div>
            </section>
        </div>
    );
}

export default Footer;