import React from 'react'
import { useMemo } from 'react'
import seatransportation from '../../../images/sea-delivery.jpg'
import line from '../../../images/career-line.jpg'
import './Services.css'
import { menuItems } from './sideMenuItems'
import { socialMedia } from '../../socialMediaData'



function SeaFreightForwarding() {
    const leftMenu = useMemo(() => {
        return menuItems.map((item) =>
            <a className='menu_link' href={item.link}>{item.title}</a>)
    }, [])

    const socialMediaLinks = useMemo(() => {
        return socialMedia.map((item) => <a  href={item.link}>{item.socialLogo}</a>)
    })
    return (
        <>
         <img className='aboutBg' src={seatransportation} />
            <div className='container'>
                <div className='content-area'>
                   
                    <h1 className='title' style={{ textAlign: 'start' }} >Sea Freight Forwarding</h1>
                    <img width='100%' src={line} />
                    <p>Water bodies are the main source of transportation for international freight forwarding. Due to this, sea freight forwarding is an area that our company works in to a large extent. With our connections in international ports, we deliver apex services in a hassle-free manner. Sea freight forwarding can sometimes be arduous for the customer if end-to-end management is not efficient. With our efficient servicing, deliverables reach the customers without such aggravating glitches when and where they want.</p>
                    <p>We manage our sea freight services through both commercial ships and steamer services. With excellent management between the carriers and the individuals at both ends of the transactions, we have been able to manage not just traditional packages of containers but large consignments of cargo through our shipment services. All kinds shipments are made through are efficient freight forwarding network. We also make sure that we provide the best deals to our customers by advising them on the ports etc. they should select to get the best deals for their consignments.</p>
                    <h3><strong>Our services include the following:</strong></h3>
                    <ul>
                        <li>Tracking facilities that provide constant information of where your consignment is. With the help of computerized mechanisms, we are constantly updated on the status of the consignments. This in turn helps us to inform the customer the status of their consignment in terms of place and time.</li>
                        <li>Management of consignment logistics. This includes both warehousing and transport of the containers to the required destinations. We keep apex facilities at our storage areas and provide the best transportation to transfer content from one place to another.</li>
                        <li>Customized shipment of different commodities like metals, food products, raw materials, and textiles.</li>
                        <li>Integration services for both exported and imported goods.</li>
                        <li>Transport of multiple consignments at a time. This allows for more deliveries of consignments in a shorter span of time.</li>
                    </ul>
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

export default SeaFreightForwarding
