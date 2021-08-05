import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <section className="aboutSection">
                <div className="aboutContainer">
                    <div className="columnLeftAbout">
                        <h1>ABOUT US</h1>
                        <p>The Entrepreneurship Cell of NITK Surathkal aims to create, foster and promote the spirit of entrepreneurship by helping young and talented minds pursue the path of innovation and set up their own entrepreneurial ventures. We strongly believe in nurturing critical thinking and business acumen by conducting workshops, speaker sessions, innovative games and competitions as well as providing student entrepreneurs with access to resources such as seed funding, mentoring, consultancy and networking.</p>
                    </div>
                    <div className="columnRightAbout">
                        <img className="aboutImg" src="/logo_ecell.svg" alt="something"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
