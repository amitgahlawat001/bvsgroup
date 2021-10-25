import React from 'react'
import { useMemo } from 'react'
import image from '../../../images/outbound.jpg'
import line from '../../../images/career-line.jpg'
import './Services.css'
import { menuItems } from './sideMenuItems'
import { socialMedia } from '../../socialMediaData'



function InboundGroupage() {
    const leftMenu = useMemo(() => {
        return menuItems.map((item) =>
            <a className='menu_link' href={item.link}>{item.title}</a>)
    }, [])

    const socialMediaLinks = useMemo(() => {
        return socialMedia.map((item) => <a  href={item.link}>{item.socialLogo}</a>)
    })
    return (
        <>
         <img className='aboutBg' src={image} alt='' />
            <div className='container'>
                <div className='content-area'>
                   
                    <h1 className='title' style={{ textAlign: 'start' }} >Inbound Groupage</h1>
                    <img width='100%' src={line} />
                    <p>By now, you already know what groupage means and have seen how it benefits the customer. Getting into the nitty-gritty of the matter, let’s understand what happens in inbound groupage. In this kind of groupage, we manage the consignments that are arriving from outside of India. Just like any other consignment travelling outside of India, we receive many projects that require the receiving of large consignments or small cargos from outside of India.</p>

                    <p>Our team of committed individuals makes sure that the freight being forwarded from outside India is consolidated properly. They also ensure that an economical deal is cut so that the customer saves money and not just time. With effective management skills and a nose for the best deals, our executives make sure that time-bound consignments are delivered in an efficient manner, safe and sound. This way, we build a constantly growing network of individuals committed towards turning more and more clients into happy customers.</p>

                    <p>Deliveries from China form a major part of the inbound groupage that Contrans Container Line Pvt. Ltd. caters to. However, more and more avenues open up before us, with our reach and efficient networking skills. Just like a regular consignment, we consolidate or group all the consignments into one and deliver them to the respective destinations without the hassle of managing multiple consignments from different venues.</p>

                    <p>
                    All of this is made possible by our brilliant team of professional freight forwarders, who constantly strive to provide the best of facilities to customers making their life easy as pie. They understand that problems and inconveniences that a customer would face and make sure that those issues don’t crop up while delivering the consignments. With ample experience our group of freight forwarders know what bothers the customers and negate any possibility of such mishaps taking place.
                    </p>
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

export default InboundGroupage
