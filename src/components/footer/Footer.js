import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className="footerContainer">
            <section className="Subscription">
                <p className="SubHeading">Join our Newsletter to get constant updates!</p>
                <p className="SubText">You can unsubscirbe any time</p>
                <div className="formInput">
                    <form>
                        <input type="email" name="email" placeholder="Email" className="footerInput"/>
                        <button type="submit" className="subBtn">Subscribe</button>
                    </form>
                </div>
            </section>
            <div className="footerLinks">
                <div className="footerLinkWrapper">
                    <div className="footerLinkItems">
                        <h2>EXPLORE</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/'>About us</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footerLinkItems">
                        <h2>DISCOVER</h2>
                        <Link to='/'>Podcast</Link>
                        <Link to='/'>Events</Link>
                        <Link to='/'>Teams</Link>
                        <Link to='/'>Recruitment</Link>
                    </div>
                </div>
                <div className="footerLinkWrapper">
                    <div className="footerLinkItems">
                        <h2>INITIATIVES</h2>
                        <Link to='/'>CAP</Link>
                        <Link to='/'>Courses</Link>
                        <Link to='/'>Startups</Link>
                        <Link to='/'>Investors</Link>
                    </div>
                    <div class='footerLinkItems'>
                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
