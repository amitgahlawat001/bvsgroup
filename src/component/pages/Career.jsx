import React from 'react'
import line from '../../images/career-line.jpg'
import './career.css'
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';



function Career() {
const [state, setState] = useState(false)
    const recaptchaRef = React.createRef();

    function onChange(value) {
        console.log("Captcha value:", value);
        setState({isVerified: true})
      }

    return (
        <div>
            <div class="wrapper">
                <h1 class="title">Career</h1>
                <img src={line} />
                <p className="sub-txt">You are welcome to send us your resume by email in soft form at <a href="mailto:info@contransgroup.com">info@contransgroup.com</a>. Please remember to include information about your education, nature and years of work experience, previous and current employers, present &amp; expected emoluments and position/role sought.</p>
            </div>
            <div class="row g-3">
                <div class="col">
                    <label for="inputName4" class="form-label">Full Name</label>
                    <input type="text" class="form-control" aria-label="Full name" />
                </div>
                <div class="col">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col">
                    <label for="inputJob4" class="form-label">Job Title</label>
                    <input type="text" class="form-control" aria-label="Job Title" />
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Upload Your resume</label>
                    <input class="form-control" type="file" id="formFile" />
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
    )
}

export default Career
