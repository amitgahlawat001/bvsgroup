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
            <div class="wrapper">
                <div className="left-col">
                    <h1 class="title">Contact <span>Us</span></h1>
                    <img width='100%' src={line} alt='' />
                    <p className="sub-txt" >Have a question? Want to send us a quick line? Need to make an appointment? Fill out the form and one of our team will contact you ASAP!</p>
                    <div class="row g-3">
                        <div class="col">
                            <label for="inputFName4" class="form-label">First Name</label>
                            <input type="text" class="form-control" aria-label="First name" />
                        </div>
                        <div class="col">
                            <label for="inputLName4" class="form-label">last Name</label>
                            <input type="text" class="form-control" aria-label="Job Title" />
                        </div>
                        <div class="col2">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="mb-3">
                            <label for="inputJob4" class="form-label">Message</label>
                            <div class="form-floating">
                                <textarea class="form-control" id="floatingTextarea2" style={{ height: 100 }}></textarea>
                                <label for="floatingTextarea2">Leave your message here</label>
                            </div>
                        </div>

                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary" disabled={!state.isVerified}>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="right-col">
                    <h1 class="title">Reach <span>Us</span></h1>
                    <img width='100%' src={line} alt='' />
                    <p class="ct-icn1">252 F, Second Floor,<br />
                        Sant Nagar, East Of Kailash,<br />
                        New Delhi – 110065, INDIA</p>
                    <p class="ct-icn2">Phone: +91 11 46527314, +91 11 26414598<br />
                        Fax: +91 11 26414600<br />
                        Email: <a href="mailto:info@contransgroup.com ">info @contransgroup.com</a></p>
                    <h1 class="title">Follow <span>Us</span></h1>
                    <div className='socilamedia'>
                        {socialMediaLinks}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
