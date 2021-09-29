import React, { useMemo } from 'react'
import logo from '../images/logo.ico'
import { Link } from 'react-router-dom';
import './Header.css'
import { useState } from 'react';
import DropDown from './DropDown'
import { Corporate, Services, Utilities } from './dropDownData';
import { socialMedia } from './socialMediaData';


const menuItems = [{ title: 'Home', link: '' }, { title: 'Corporate', link: '' }, { title: 'Services', link: '' }, { title: 'Utilities', link: '' }, { title: 'Contact', link: '' }]


function Header() {
    const [search, setSearch] = useState("");

    const [click, setClick] = useState(false);
    const [dropdown, setDropDown] = useState(-1);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = (index) => () => {
        if (window.innerWidth < 960) {
            setDropDown(-1);
        } else {
            setDropDown(index);
        }
    };

    const onMouseLeave = (index) => () => {
        if (window.innerWidth < 960) {
            setDropDown(-1);
        } else {
            setDropDown(index);
        }
    };

    const navItems = useMemo(() => {
        return menuItems.map((item, index) => <li className='menu_items' key={item.title}
            onMouseEnter={onMouseEnter(index)}
            onMouseLeave={onMouseLeave(index)}>
            <Link to={item.link} className='menu_link' onClick={closeMobileMenu}>
                {item.title} <i className='fas fa-caret-down' />
            </Link>
            {dropdown === index && <DropDown data={Corporate} />}
        </li>)
    }, [])

    const socialMediaLinks = useMemo(() => {
        return socialMedia.map((item) => <Link>
            {item.socialLogo}
        </Link>)
    })


    return (


        <div className='header-area'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <img src={logo} alt='/' />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>


            <div className='nav-wrapper'>
                <div className='search-area'onClick={closeMobileMenu}>
                    <input className='input-bar' type="search" name='search' id='search' autoComplete='false' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Here...' />
                    {socialMediaLinks}
                </div>


                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {navItems}
                </ul>
            </div>
        </div>
    )
}

export default Header
