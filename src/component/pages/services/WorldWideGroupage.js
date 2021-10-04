import React from 'react'
import { useMemo } from 'react'
import image from '../../../images/internation.jpg'
import line from '../../../images/career-line.jpg'
import './Services.css'
import { menuItems } from './sideMenuItems'
import { socialMedia } from '../../socialMediaData'



function WorldWideGroupage() {
    const leftMenu = useMemo(() => {
        return menuItems.map((item) =>
            <a className='menu_link' href={item.link}>{item.title}</a>)
    }, [])

    const socialMediaLinks = useMemo(() => {
        return socialMedia.map((item) => <a href={item.link}>{item.socialLogo}</a>)
    })
    return (
        <>
            <img className='aboutBg' src={image} />
            <div className='container'>
                <div className='content-area'>

                    <h1 className='title' style={{ textAlign: 'start' }} >World Wide Groupage</h1>
                    <img width='100%' src={line} />
                    <p>Groupage forms a very important part of freight forwarding. In this process, CCL brings to together different, multiple cargos and consignments and creates one consignment of all those individual consignments. This consolidation when done for road transportation is termed as groupage. This sees the customer through major benefits. Why? When this kind of consolidation is done for consignments, there are two major aspects that reap the benefits:</p>
                    <ul>
                        <li><strong>Time:</strong></li>
                            <p>Time is saved majorly because, what might be delivered after a delay waiting for vehicles to be available is scheduled to arrive beforehand to the assigned venues.From there, the consignments are taken together and delivered in one go, thereby ensuring the delivery of the consignments before time!</p>
                        <li><strong>Money:</strong></li>
                            <p>Money also gets saved, because when you taken up something in lump sum, the freight costs get slashed steeply and the customer saves on a lot of the finances that may have originally cost more.</p>
                    </ul>
                    <p>But how does the customer get to know whether that option is available in their case. Well, we tell them! You would remember that transparency and good advice form the basis of our objectives and functioning in CCL. We apply these mottos at every step we take. So when a consignment that can be transported via road comes to us, the first thing we try to see is the scope of groupage. Given the timeline, we advise the customer if groupage is an option and with their consent, go ahead and apply it.</p>

                    <p>When this groupage takes an international turn involving shipments, it is called consolidation. The same rules apply and benefit the customer more than anybody else! At the end of the day, that’s what we want—to leave our customer happy and ready to take our help whenever they need it again.</p>
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

export default WorldWideGroupage
