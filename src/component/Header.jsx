import React, { useMemo } from 'react'
import logo from '../images/logo.ico'
import { Link } from 'react-router-dom';
import './Header.css'
import { useState } from 'react';
import { socialMedia } from './socialMediaData';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'


function Header() {
    const [search, setSearch] = useState("");

    const socialMediaLinks = useMemo(() => {
        return socialMedia.map((item) => <Link>
            {item.socialLogo}
        </Link>)
    }, [])


    return (

        <Navbar bg="light" variant="light"
            sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
                <a href='/' ><img src={logo} width="50rem" height="50rem" alt='/' /></a>
            </Navbar.Brand>
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Corporate">
                        <NavDropdown.Item href="/Clients">Clients</NavDropdown.Item>
                        <NavDropdown.Item  href="/AIM">Aim & Objectives</NavDropdown.Item>
                        <NavDropdown.Item href="/Career">Career</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Services">
                        <NavDropdown.Item href="/AirFreightForwarding">Air Freight Forwarding</NavDropdown.Item>
                        <NavDropdown.Item href="/SeaFreightForwarding">Sea Freight Forwarding</NavDropdown.Item>
                        <NavDropdown.Item href="/CustomClearance">Custom Clearance</NavDropdown.Item>
                        <NavDropdown.Item href="/DoorToDoor">Door to Door Logistics</NavDropdown.Item>
                        <NavDropdown.Item href="/EXIMConsultancy">EXIM Consultancy</NavDropdown.Item>
                        <NavDropdown.Item href="/RoadTransportation">Road Transportation</NavDropdown.Item>
                        <NavDropdown.Item href="/Storage">Storage & Distribution</NavDropdown.Item>
                        <NavDropdown.Item href="/Storage">Storage &#038; Distribution</NavDropdown.Item>
                        <NavDropdown.Item href="/OutboundGroupage">Outbound Groupage</NavDropdown.Item>
                        <NavDropdown.Item href="/InboundGroupage">Inbound Groupage</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Utilities">
                        <NavDropdown.Item href="http://contransgroup.com/wp-content/uploads/2015/08/portsoftheworld.pdf" target='_blank'>Worldwide Ports</NavDropdown.Item>
                        <NavDropdown.Item href="http://contransgroup.com/wp-content/uploads/2015/08/container-sizes.pdf" target='_blank'>Container Sizes</NavDropdown.Item>
                        <NavDropdown.Item href="http://contransgroup.com/wp-content/uploads/2015/08/ff-consol-manual.pdf" target='_blank'>Shipments Terms</NavDropdown.Item>
                        <NavDropdown.Item href="/CurrencyConverter">Currency Converter</NavDropdown.Item>
                        <NavDropdown.Item href="/WorldClock">World Clock</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/AboutUs">About Us</Nav.Link>
                    <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <div className='search-area'>
            <input className='input-bar' type ="search" name='search' id='search' autoComplete='false' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Here...' />
            </div>
            <div className="socialmedialinks" style={{color: 'white'}}>
                        {socialMediaLinks}
            </div>
        </Navbar>
    )
}

export default Header
