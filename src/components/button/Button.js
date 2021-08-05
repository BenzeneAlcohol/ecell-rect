import './Button.css'
import {Link} from 'react-router-dom';
import React from 'react'

function Button() {
    return (
        <Link to="signup">
            <button className="buttonbtn">Sign Up</button>
        </Link>
    )
}

export default Button
