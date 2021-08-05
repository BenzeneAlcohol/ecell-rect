import Btn from '../button/Btn';
import './Hero.css';

import React from 'react'

function Hero() {
    return (
        <div className='hero-container'>
            <img src="/bg.jpg" alt="someImg"/>
            <div className="textElements">
                <h1>GRAB AN INTERNSHIP NOW!</h1>
                {/* <p>We at NITK ECell are providing you with the best internship oppurtunities you can ever find on the internet!</p> */}
            </div>
            <div className='hero-btns'>
                <Btn
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    buttonText="internship"
                >
                    FIND INTERNSHIP!
                </Btn>
                <Btn
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    buttonText="signup"
                >
                    SIGNUP! <i className='far fa-play-circle' />
                </Btn>
            </div>
        </div>
    )
}

export default Hero
