import React from 'react'
import { useMemo } from 'react'
import image from '../../../images/exportimport.jpg'
import line from '../../../images/career-line.jpg'
import './Services.css'
import { menuItems } from './sideMenuItems'
import { socialMedia } from '../../socialMediaData'
import BusinessData from './businessGuidLines/BusinessData'




function Exim() {
    const leftMenu = useMemo(() => {
        return menuItems.map((item) =>
            <a className='menu_link' href={item.link}>{item.title}</a>)
    }, [])

    const socialMediaLinks = useMemo(() => {
        return socialMedia.map((item) => <a href={item.link}>{item.socialLogo}</a>)
    }, [])
    return (
        <>
            <img className='aboutBg' src={image} />
            <div className='container'>
                <div className='content-area' style={{ height: "47rem"}}>

                    <h1 className='title' style={{ textAlign: 'start' }} >EXIM Consultancy</h1>
                    <img width='100%' src={line} />
                    <p>The main objective to present “How to Export Guide”, is to help Export Import community to understand the practical process of starting a Export Import Business. “How to Export Guide” has been especially designed for start ups, small- and medium-sized enterprises that are considering diversification in Exports.</p>

                    <p>Even for a experienced exporter, there is lot of practical information which might have been overlooked,  but is very useful for a exporter in an international market.</p>

                    <BusinessData />
                </div>
                <div className='sidemenu'>
                    <div class="titlebox">
                        Logistic Services
                    </div>
                    <div className='leftmenu'>
                        {leftMenu}
                    </div>
                    <div className='socilamedia'>
                        {socialMediaLinks}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Exim
