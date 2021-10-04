import React from 'react'
import { useMemo } from 'react'
import seatransportation from '../../../images/airimage.jpg'
import line from '../../../images/career-line.jpg'
import './Services.css'
import { menuItems } from './sideMenuItems'
import { socialMedia } from '../../socialMediaData'



function AirFreightForwarding() {
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

                    <h1 className='title' style={{ textAlign: 'start' }} >Air Freight Forwarding</h1>
                    <img width='100%' src={line} />
                    <p>At every step of our deals and services, we keep customer satisfaction at the head of our motives. Doing this not only helps the customer immensely but also lets us know where our strengths are. We understand that just like CCL, customers also have aims that they want to achieve. We help them fulfill those aims by providing them our air freight services in a timely manner. Supply chain management is done efficiently by our air freight specialists, making sure that the content reaches the right airport and from there is duly transported in the right manner. For consumer goods like canned foods etc. we provide temperature controlled & containers to maintain the durability of the customer’s goods.</p>
                    <p>We believe in forming good first impressions and carrying those very impressions forward in our dealings with customers. The following aims and objectives help us in our attempts maintain clear and profitable relationships with our customers:</p>
                    <p>Customer is our Guiding Light & CCL considers customers to be guiding lights that lead us to the destination we want to reach. With changing customers having more needs, our destination keeps changing and leads us to new milestones of progress.</p>
                    <p><strong>CCL as a Family: </strong>
                        We believe that all our customers are part of the CCL family and every family member deserves the very best. We keep this in mind while offering our help to customers.
                    </p>
                    <p><strong>Working Together: </strong>
                        Working as one is something that we believe in the most, and this belief stems from the concept ‘CCL as a family’. We realize that any family needs to work together get what it wants and we practice this in our company.
                    </p>
                    <p><strong>Proficient Leadership: </strong>
                        Every team needs a leader.But not just any leader; it needs a leader that knows how to bring the best out of the team.With an efficient leadership that constantly makes the right decision, we fulfill this objective at all times.
                    </p>
                    <p><strong>Process-Oriented Working: </strong>
                    Employees are like water that will take the form they are given.Therefore, it is necessary to know make a process that leads the employees to their highest potential and the customers to the greatest level of satisfaction.At CCL, every employee has an assigned profile and completes his or her work according to a set process.This is followed across all verticals of the company ensuring uniformity and timeliness in the delivery of projects.
                    </p>
                    <p><strong>Successful Forecasting: </strong>
                    Customers know what they want now, but to show them the future is something that our team focuses on.This helps the customer see how the wants of the present can be altered to ensure a better future.The capability of foresight is something CCL constantly exercises in its deals with different customers, ensuring long-term relationships that are profitable for both the company and the customer.
                    </p>


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

            export default AirFreightForwarding
