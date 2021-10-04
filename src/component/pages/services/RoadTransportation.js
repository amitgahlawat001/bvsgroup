import React from 'react'
import { useMemo } from 'react'
import image from '../../../images/road.jpg'
import line from '../../../images/career-line.jpg'
import './Services.css'
import { menuItems } from './sideMenuItems'
import { socialMedia } from '../../socialMediaData'



function RoadTransportation() {
    const leftMenu = useMemo(() => {
        return menuItems.map((item) =>
            <a className='menu_link' href={item.link}>{item.title}</a>)
    }, [])

    const socialMediaLinks = useMemo(() => {
        return socialMedia.map((item) => <a  href={item.link}>{item.socialLogo}</a>)
    })
    return (
        <>
         <img className='aboutBg' src={image} />
            <div className='container'>
                <div className='content-area'>
                   
                    <h1 className='title' style={{ textAlign: 'start' }} >Road Transportation</h1>
                    <img width='100%' src={line} />
                    <p>In the freight forwarding business, you are nowhere unless you have a fleet of reliable vehicles that help you carry the consignment from the pick-up point to the assigned drop point. Road transportation is needed when a consignment is to be transferred from its storage point to the desired sea port or airport or when it reaches the desired sea port or airport and needs to be supplied to the anticipating third party. With multiple consignments making way every day, freight forwarding would become an uphill task for any firm.</p>
                    <p>We at CCL ensure that our transportation system helps deliver consignments from one point to another with the utmost care. With different kinds of vehicles customized for small cargos or large consignments, CCL helps deliver the customer’s content in due time and in the best of shapes. With our contacts and strong relationships with transportation services, we are able to deliver consignments that need sudden deliveries. Our trailers and loaders help transport consignments from one city to another and even aid in providing door-to-door facilities to the customer.</p>

                    <p>Trucking services are constantly on the go and our efficient employees make sure that the consignments are boarded and transferred in the just the right manner. From pick up to drop facilities at any hour, our road transport services will leave you in awe of the sheer convenience they provide. With the timely and safe delivery of consignments, you don’t need to worry about a thing. If you don’t want the goods to be delivered on a mediating location, we can deliver them directly on the site of utilization, saving time and money. From general cargo to refrigerated containers, we customize the containers to the kind of goods that need to be transported and provide facilities to the customers just the way they like it!</p>
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

export default RoadTransportation
