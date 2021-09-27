import React from 'react';
import { useState } from 'react';
import './DropDown.css';
import { Link } from 'react-router-dom';

function DropDown({data=[],...props}) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {data.map((item, index) => { 
                return (
                <li key={index}>
                    <Link className={item.name} to={item.path} onClick={() => setClick(false)}>
                        {item.title}
                    </Link>
                </li>
                );
            })}
        </ul>
    </div>
    )
}

export default DropDown
