import React, { useMemo } from 'react'
import logo from '../images/logo.ico'
import { Link } from 'react-router-dom';
import './Header.css'
import { useState, useEffect } from 'react';
import DropDown from './DropDown'
import { Corporate, Services, Utilities } from './dropDownData';
import { socialMedia } from './socialMediaData';


const menuItems = [{ title: 'Home', link: '' }, { title: 'Corporate', link: '' }, { title: 'Services', link: '/SeaFreightForwarding' }, { title: 'Utilities', link: '' }, { title: 'Contact', link: '/ContactUs' }]


function Header() {
    const [search, setSearch] = useState("");

    const [click, setClick] = useState(false);
    const [dropdown, setDropDown] = useState(-1);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    //scroll
    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses = ['navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    // const onMouseEnter = (index) => () => {
    //     if (window.innerWidth < 960) {
    //         setDropDown(-1);
    //     } else {
    //         setDropDown(index);
    //     }
    // };

    // const onMouseLeave = (index) => () => {
    //     if (window.innerWidth < 960) {
    //         setDropDown(-1);
    //     } else {
    //         setDropDown(index);
    //     }
    // };

    // const navItems = useMemo(() => {
    //     return menuItems.map((item, index) => <ul className='menu_items' key={item.title}>
    //         {/* // onMouseEnter={onMouseEnter(index)}
    //         // onMouseLeave={onMouseLeave(index)} */}
    //         <Link to={item.link} className='menu_link' onClick={closeMobileMenu}>
    //             {item.title} <i className='fas fa-caret-down' />
    //         </Link>
    //     </ul>)
    // }, [])

    const socialMediaLinks = useMemo(() => {
        return socialMedia.map((item) => <Link>
            {item.socialLogo}
        </Link>)
    }, [])


    return (


        <header className={navbarClasses.join(" ")}>
            <Link to='/' className='navbar-logo' >
                <img src={logo} alt='/' />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <div className='search-container'>
                <div className='search-btn'>
                    <div className='search-box'>
                        <button className="btn-search" id='search-button'><i class="fas fa-search"></i></button>
                        <input type="text" className="input-search" placeholder="Type to Search..." />
                    </div>
                </div>
            </div>

            <div className='nav-wrapper'>
                <div className='search-area' onClick={closeMobileMenu}>
                    <input className='input-bar' type="search" name='search' id='search' autoComplete='false' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Here...' />
                    <div className="socialmedialinks">
                        {socialMediaLinks}
                    </div>
                </div>

                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                    <ul>
                        <li><a className='menu_items' href='/Home'>Home<i className='fas fa-caret-down' /></a></li>

                        <li> <a className='menu_items' href=''>Corporate<i className='fas fa-caret-down' /></a>
                            <div className="dropdown">
                                <ul>
                                    <li><a className='nav-link' className='nav-link' href="/AboutUs">About Us</a></li>
                                    <li><a className='nav-link' href="/Clients">Clients</a></li>
                                    <li><a className='nav-link' href="/AIM">Aim & Objectives</a></li>
                                    <li><a className='nav-link' href="/Career">Career</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a className='menu_items' href='/SeaFreightForwarding'>Services<i className='fas fa-caret-down' /></a>

                            <div className="dropdown">
                                <ul>
                                    <li><a className='nav-link' href="/AirFreightForwarding">Air Freight Forwarding</a></li>
                                    <li><a className='nav-link' href="/SeaFreightForwarding">Sea Freight Forwarding</a></li>
                                    <li><a className='nav-link' href="/CustomClearance">Custom Clearance</a></li>
                                    <li><a className='nav-link' href="/DoorToDoor">Door to Door Logistics</a></li>
                                    <li><a className='nav-link' href="/Exim">EXIM Consultancy</a></li>
                                    <li><a className='nav-link' href="/RoadTransportation">Road Transportation</a></li>
                                    <li><a className='nav-link' href="/Storage">Storage &#038; Distribution</a></li>
                                    <li><a className='nav-link' href="/WorldWideGroupage">World Wide Groupage</a></li>
                                    <li><a className='nav-link' href="/OutboundGroupage">Outbound Groupage</a></li>
                                    <li><a className='nav-link' href="/InboundGroupage">Inbound Groupage</a></li>
                                </ul>
                            </div>
                        </li>
                        <li> <a className='menu_items' href=''>Utilities<i className='fas fa-caret-down' /></a>
                            <div className="dropdown">
                                <ul>
                                    <li><a className='nav-link' href="http://contransgroup.com/wp-content/uploads/2015/08/portsoftheworld.pdf">Worldwide Ports</a></li>
                                    <li><a className='nav-link' href="http://contransgroup.com/wp-content/uploads/2015/08/container-sizes.pdf">Container Sizes</a></li>
                                    <li><a className='nav-link' href="http://contransgroup.com/wp-content/uploads/2015/08/ff-consol-manual.pdf">Shipments Terms</a></li>
                                    <li><a className='nav-link' href="http://contransgroup.com/wp-content/uploads/2017/01/portsoftheworld.pdf">Port Directions</a></li>
                                    <li><a className='nav-link' href="https://contransgroup.com/currency-converter/">Currency Converter</a></li>
                                    <li><a className='nav-link' href="https://contransgroup.com/world-clock/">World Clock</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                        <a className='menu_items' href='/ContactUs'>Contact<i className='fas fa-caret-down' /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
