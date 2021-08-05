import React from 'react'
import './Contact.css'
// import PhoneIcon from '@material-ui/icons/Phone';
// import EmailIcon from '@material-ui/icons/Email';
// import BusinessIcon from '@material-ui/icons/Business';

import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


function Contact() {
    return (
        <div className="contactInfo" id="contact">
            {/* <div className="ContactWrapper">
                <div className="information">
                    <div className="infoitem">
                        <PhoneIcon/>
                        <h2>Phone</h2>
                        <p>8921472523</p>
                    </div>
                    <div className="infoitem">
                        <EmailIcon/>
                        <h2>Email</h2>
                        <p>muthuku37@gmail.com</p>
                    </div>
                    <div className="infoitem">
                        <BusinessIcon/>
                        <h2>Address</h2>
                        <p>D-8B</p>
                    </div>
                </div>
            </div>
            <div className="contactusForm">
                    <h1>Get in Touch</h1>
                    <form className="contactForm">
                            <div className="firstSet">
                                <input type="text" placeholder="Your Name" className="contactusFormInput"/>
                                <input type="text" placeholder="Your Email" className="contactusFormInput"/>
                                <input type="text" placeholder="Your Phone Number" className="contactusFormInput"/>
                            </div>
                            <div className="secondSet">
                                <input type="text" placeholder="Your Message" className="contactUsMessage"/>
                            </div>
                        <div className="btndiv">
                            <button type="submit" className="contactFormBtn">Submit</button>
                        </div>
                    </form>
                </div> */}
                <h1>Contact Us!</h1>
                <section className="contactusSection">
                    <div className="socialContainer">
                        <a href="www.google.com"><FacebookIcon/></a>
                        <a href="www.google.com"><YouTubeIcon/></a>
                        <a href="www.google.com"><InstagramIcon/></a>
                        <a href="www.google.com"><TwitterIcon/></a>
                    </div>
                    <div className="contact-box">
                        <div class="contactHeading">
                            <h1>Get in Touch!</h1>
                            <p>Fill the form to contact us</p>
                        </div>
                        <div className="contactInputs">
                            <input type="text" placeholder="Full Name"/>
                            <input type="email" placeholder="Email Address"/>
                            <textarea name="message" placeholder="Enter your message"/>
                            <button className="contactformbutton">SUBMIT</button>
                        </div>
                    </div>
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.794832439144!2d74.78738847419447!3d13.010345363321777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba352102ead8b45%3A0x8e3ac4ac1e83c7f2!2sNational%20Institute%20of%20Technology%20Karnataka%20(NITK)!5e0!3m2!1sen!2sin!4v1627727648610!5m2!1sen!2sin" title="map"></iframe>
                    </div>
                </section>
        </div>
    )
}

export default Contact
