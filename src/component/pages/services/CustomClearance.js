import React from 'react'
import { useMemo } from 'react'
import seatransportation from '../../../images/custom.jpg'
import line from '../../../images/career-line.jpg'
import './Services.css'
import { menuItems } from './sideMenuItems'
import { socialMedia } from '../../socialMediaData'



function CustomClearance() {
    const leftMenu = useMemo(() => {
        return menuItems.map((item) =>
            <a className='menu_link' href={item.link}>{item.title}</a>)
    }, [])

    const socialMediaLinks = useMemo(() => {
        return socialMedia.map((item) => <a href={item.link}>{item.socialLogo}</a>)
    })
    return (
        <>
            <img className='aboutBg' src={seatransportation} />
            <div className='container'>
                <div className='content-area'>

                    <h1 className='title' style={{ textAlign: 'start' }} >Custom Clearance</h1>
                    <img width='100%' src={line} />
                    <p>Customs clearance is an extremely relevant part of CCL’s trading operations. This is so, because without customs clearance, the consignments aren’t shown a green light for transportation or release to the required third party. That is why it has direct impact on the freight forwarding arena. This makes it imperative for cooperation to present between freight forwarding and customs clearing. Only then can a consignment’s transportation can be a smooth sail. But how does CCL make sure that hassles involving custom clearance go nowhere near the customer. Here’s how.
                    </p>
                    
                    <p>We at CCL make sure that he during customs clearance we have an advantage over others. For this our experts have thoroughly studied the different restricts etc. needed for both the import and export of cargo. Apart from that, they have acquired in-depth knowledge of the duty rates levied through the custom checks and make sure that there is no kind of misleading taking place during such checks. What’s more, since the experts have studied a vast range of tariffs and discounts, they are able to provide the customer with the best ways to reduce duty on the consignment in a fully legal manner. This would not be possible under circumstances where the customs clearance has not been studied properly.</p>

                   <p>With electronic transactions, we make sure that all the clearances are taken and requirements met on different kinds of goods including perishables like foods etc. In case of such perishables, we make sure that the clearances are taken in due time so as to avoid any delay and a resultant loss of goods to the customer. We make sure that penalties have not been issued anywhere to any one of the parties involved in the forwarding. This helps ensure fewer delays and lowered customs rates, because credibility does count!</p>


                    </div>
                    <div className='sidemenu'>
                    <div class ="titlebox">
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

            export default CustomClearance
