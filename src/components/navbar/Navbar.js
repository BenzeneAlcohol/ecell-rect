import React, {useState} from 'react'
import Button from '../button/Button';
import {Link} from 'react-router-dom';
import './Navbar.css';
function Navbar() {

    const [click, setClick] = useState(false);
    const handleClickListener = () =>{
        setClick(!click);
    }
    const closeMenu = () =>{
        setClick(false);
    }

    return (
        <div>
            <nav className="Navbar">
            <Link to='/' className='navLogo' onClick={closeMenu}>
                E-Cell
            </Link>
                <div className="menuIcon" onClick={handleClickListener}>
                    <i className={click? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click? 'navMenu active' : 'navMenu'}>
                    <li className="navItem">
                        <Link to="/" className="navLinks" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/internship" className="navLinks" onClick={closeMenu}>Internships </Link>
                    </li>
                    <li className="navItem">
                        <a href="/#about" className="navLinks" onClick={closeMenu}>About us</a>
                    </li>
                    <li className="navItem">
                        <a href="/#contact" className="navLinks" onClick={closeMenu}>Contact us</a>
                    </li>
                    <li className="navItem">
                        <Link to="/signup" className="navLinksMobile" onClick={closeMenu}>Sign up</Link>
                    </li>
                </ul>
                <Button/>
            </nav>
        </div>
    )
}

export default Navbar
