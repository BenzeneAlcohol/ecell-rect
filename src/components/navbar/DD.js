import React, {useState} from 'react'
import './DD.css';
import {Link} from 'react-router-dom';

function DD() {
    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);


    return (
        <div>
            <ul onClick={handleClick} className={click? 'dropdownMenu clicked': 'dropdownMenu'}>
                <li>
                    <Link className="dropDownLink" to="/internships" onClick={()=>setClick(false)}>Computer Science</Link>
                </li>
                <li>
                    <Link className="dropDownLink" to="/internships" onClick={()=>setClick(false)}>Mechanical</Link>
                </li>
                <li>
                    <Link className="dropDownLink" to="/internships" onClick={()=>setClick(false)}>Electronics</Link>
                </li>
                <li>
                    <Link className="dropDownLink" to="/internships" onClick={()=>setClick(false)}>Buisiness</Link>
                </li>
            </ul>
        </div>
    )
} 

export default DD
