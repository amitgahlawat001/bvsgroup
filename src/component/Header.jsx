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

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src={logo} alt='/' /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class ="btn btn-outline-success" type ="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        // <div className='header-area'>
        //     <Link to='/' className='navbar-logo'>
        //         
        //     </Link>
        //     <div className="menu-icon" onClick={handleClick}>
        //         <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        //     </div>


        //     <div className='nav-wrapper'>
        //         <div className='search-area'>
        //             <input className='input-bar' type="search" name='search' id='search' autoComplete='false' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Here...' />
        //             {socialMediaLinks}
        //         </div>


        //         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        //             <li className='nav-item'>
        //                 {navItems}
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    )
}

export default Header
