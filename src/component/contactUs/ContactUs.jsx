import React, { useState, useMemo } from 'react'
import GoogleMap from './GoogleMap'
import line from '../../images/career-line.jpg'
import ReCAPTCHA from "react-google-recaptcha";
import { socialMedia } from '../socialMediaData';
import './contact.css'

function ContactUs() {

    const [state, setState] = useState(false)
    const recaptchaRef = React.createRef();

    function onChange(value) {
        console.log("Captcha value:", value);
        setState({ isVerified: true })
    }
    const socialMediaLinks = useMemo(() => {
        return socialMedia.map((item) => <a href={item.link}>{item.socialLogo}</a>)
    })

    return (
        <div>
            <div className="map-container" style={{ height: '25rem', width: '100%' }}>
                <GoogleMap />
            </div>
            <div className="contact-wrapper">
                <div className="left-col">
                    <h1 className="title">Contact <span>Us</span></h1>
                    <img width='100%' src={line} alt='' />
                    <p className="sub-txt" >Have a question? Want to send us a quick line? Need to make an appointment? Fill out the form and one of our team will contact you ASAP!</p>
                    <div className="row g-3">
                        <div className="col">
                            <label for="inputFName4" className="form-label">First Name</label>
                            <input type="text" className="form-control" aria-label="First name" />
                        </div>
                        <div className="col">
                            <label for="inputLName4" className="form-label">last Name</label>
                            <input type="text" className="form-control" aria-label="Job Title" />
                        </div>
                        <div className="col2">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="mb-3">
                            <label for="inputJob4" className="form-label">Message</label>
                            <div className="form-floating">
                                <textarea className="form-control" id="floatingTextarea2" style={{ height: 100 }}></textarea>
                                <label for="floatingTextarea2">Leave your message here</label>
                            </div>
                        </div>

                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary" disabled={!state.isVerified}>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="right-col">
                    <h1 className="title">Reach <span>Us</span></h1>
                    <img width='100%' src={line} alt='' />
                    <p className="ct-icn1"> A-36/GF Gali NO -02 
                                Jagatpuri Delhi -110051, INDIA</p>
                    <p className="ct-icn2">
                        Phone: +91-9654550819<br />
                        Email: <a href="mailto:info@bvsgroup.in ">info@bvsgroup.in</a></p>
                    <h1 className="title">Follow <span>Us</span></h1>
                    <div className='socilamedia'>
                        {socialMediaLinks}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
