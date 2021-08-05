import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import Info from '../pages/info/Info'
import Footer from '../footer/Footer'
import Mediabar from '../socbar/Mediabar'
import Contact from '../contact/Contact'
import About from '../about/About'
function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Info/>
            <About/>
            <Contact/>
            <Footer/>
            <Mediabar/>
        </div>
    )
}

export default Home
