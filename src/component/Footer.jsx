import React, { useMemo } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { socialMedia } from './socialMediaData';

function Footer() {
    const socialMediaLinks = useMemo(() => {
        return socialMedia.map((item) => <Link to={item.path}>
            {item.socialLogo}
        </Link>)
    })

    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-text'>
                    <h1>Stay In<span>Touch</span></h1>
                </p>
                <div className='input-areas'>
                    <input
                        className='footer-input'
                        name='email'
                        type='email'
                        placeholder='Your Email'
                    />
                    <button type='submit' className='footer-submit-btn'><a href="mailto:info@bvsgroup.com">Submit</a></button>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Quick <span>Links</span></h2>
                        <Link to='/AboutUs'>About Us</Link>
                        <Link to='/Clients'>Clients</Link>
                        <Link to='/Career'>Careers</Link>
                        <Link to='/ContactUs'>Contact</Link>

                    </div>
                    <div className='footer-link-items'>
                    <h2>Locate <span>Us</span></h2>
                            <i className="fas fa-map-marker-alt"></i>  A-36/GF Gali NO -02 
                                Jagatpuri Delhi -110051, INDIA
                            <i className="fas fa-phone-alt"></i>  +91-9654550819
                            <i className="fas fa-envelope"></i><a href="mailto: info@bvsgroup.in"> info@bvsgroup.in</a>
                       
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                    <h2>Services</h2>
                        <Link to='/SeaFreightForwarding'>Sea Freight Forwarding</Link>
                        <Link to='/CustomClearance'>Custom Clearance</Link>
                        <Link to='/EXIMConsultancy'>EXIM Consultancy</Link>
                        <Link to='/StorageDistribution'>Storage & Distribution</Link>
                        <Link to='/OutboundGroupage'>Outbound Groupage</Link>
                        <Link to='/AirFreightForwarding'>Air Freight Forwarding</Link>
                        <Link to='/DoorToDoor'>Door to Door Logistics</Link>
                        <Link to='/RoadTransportation'>Road Transportation</Link>
                        <Link to='/WorldWideGroupage'>World Wide Groupage</Link>
                        <Link to='/InboundGroupage'>Inbound Groupage</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <small className='website-rights'>Copyright © 2014-15 Contain Group. All Rights Reserved </small>
                    <div className="socialmedialinks">
                        {socialMediaLinks}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;