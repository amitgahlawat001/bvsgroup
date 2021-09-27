import React, { useMemo } from 'react'
import logo from '../images/logo.ico'
import { Link } from 'react-router-dom';
import './Header.css'
import { useState } from 'react';
import DropDown from './DropDown'
import { Corporate, Services, Utilities } from './dropDownData';
import {}


const menuItems = [{ title: 'Home', link: '' }, { title: 'Corporate', link: '' }, { title: 'Services', link: '' }, { title: 'Utilities', link: '' }, { title: 'Contact', link: '' }]

const socialMediaItems = ['facebook', 'google', 'twitter']

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
        return menuItems.map((item, index) => <li classNameName='menu_items' key={item.title}
            onMouseEnter={onMouseEnter(index)}
            onMouseLeave={onMouseLeave(index)}>
            <Link to={item.link} classNameName='menu_link' onClick={closeMobileMenu}>
                {item.title} <i classNameName='fas fa-caret-down' />
            </Link>
            {dropdown === index && <DropDown data={item.title} />}
        </li>)
    }, [])

    const socialMediaLinks = useMemo(() => {
        return socialMediaItems.map((item, index) => <Link
            key={item}
            class='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
        >
            item.logo
        </Link>)
    })


    return (


        <div className='header-area'>
            <Link to='/' className='navbar-logo'>
                <img src={logo} alt='Home' />
            </Link>

            <div className='nav-wrapper'>
                <div className='search-area'>
                    <input style={{ flexGrow: 0.9 }} type="search" name='search' id='search' autoComplete='false' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Here...' />

                    {socialMediaLinks}
                </div>
                <div className="nav-menu">
                    <ul className='nav-menu'>
                        {navItems}

                    </ul>
                </div>
            </div>
        </div>

        // <div className='header-area'>
        //     <div className="wrapper">
        //         <div className="logo">
        //             <Link to='/' className='navbar-logo'>
        //                 <img src={logo} alt='Home' />
        //             </Link>
        //         </div>
        //         <div className="search-area">
        //             <div className="search-bar">
        //                 <input type="search" name='search' id='search' autoComplete='false' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Here...' />
        //             </div>
        //             <div className="social-media">
        //                 <Link
        //                     class='social-icon-link instagram'
        //                     to='/'
        //                     target='_blank'
        //                     aria-label='Instagram'
        //                 >
        //                     <i class='fab fa-instagram' />
        //                 </Link>
        //                 <Link
        //                     class='social-icon-link youtube'
        //                     to='/'
        //                     target='_blank'
        //                     aria-label='Youtube'
        //                 >
        //                     <i class='fab fa-youtube' />
        //                 </Link>
        //                 <Link
        //                     class='social-icon-link twitter'
        //                     to='/'
        //                     target='_blank'
        //                     aria-label='Twitter'
        //                 >
        //                     <i class='fab fa-twitter' />
        //                 </Link>
        //                 <Link
        //                     class='social-icon-link google'
        //                     to='/'
        //                     target='_blank'
        //                     aria-label='google+'
        //                 >
        //                     <i class="fab fa-google-plus-g" />
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="nav-menu">
        //         <ul className='nav-menu'>
        //             {navItems}

        //         </ul>
        //     </div>
        // </div>
    )
}

export default Header
