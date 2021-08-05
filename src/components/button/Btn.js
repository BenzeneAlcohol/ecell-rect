import React from 'react'
import './Btn.css'
import { Link } from 'react-router-dom'
function Btn({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonText
}) {

    const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
    const SIZES = ['btn--medium', 'btn--large'];

    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];


    return (
        <div>
            <Link to={buttonText==="signup" ? 'signup' : 'internship'} className='btn-mobile'>
                <button
                    className={`btnbtn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                >
                    {children}
                </button>
            </Link>
        </div>
    )
}

export default Btn
