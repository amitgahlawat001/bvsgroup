import React from 'react'
import { useMemo } from 'react'
import topslide1 from '../../images/topslider1.jpg'
import topslide2 from '../../images/topslider2.jpg'
import line from '../../images/hd-line.jpg'
import Cards from '../card/Cards'
import './home.css'
import { bgSectionData } from '../bgSection/bgSectionData'
import { Link } from 'react-router-dom'



function Home() {

    const bgSection = useMemo(() => {
        return bgSectionData.map((item) => <li key={item.name} className='list'> 
            <img src ={item.image}/>
            <Link to={item.path}>{item.text}</Link>
        </li>)
    }, [])

    return (
        <>
            <div className='top-slide'>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={topslide1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={topslide2} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <Cards />

            <div className="section">
                <h1 className="title">Welcome to <span>Contrans Group</span></h1>

                <div className="sub-txt">Logistic Helps You Realise Your Business Goals
                    <img src={line} />
                </div>
                <p>Contrans Group is an international freight forwarding firm with a strong foothold in the freight forwarding market. The company was founded in 2007 and has seen an upwards graph under the sturdy charge of its Director. Apart from China, the company has a grip on the freight forwarding markets of countries like
                    Southeast Asia, Middle East, Europe and USA.</p>
                <p>The company is known for its customer-based approach to the freight forwarding business and guarantees nothing less than the very best to its customer. At Contrans, customers are not just firms or individuals involved in business, they are our family and everybody knows that family ALWAYS comes first. We believe in maintaining long-term relationships with our customers and always look out for what's best for them. With competitive rates and equally competitive services, we offer customer satisfaction in the field of sea freight forwarding, air freight forwarding, road transportation , storage, distribution, and international groupage.
                </p>
            </div>
            <div className="list">
                {bgSection}
            </div>
            {/* {/* <div className="services-area">
                <div className="wrapper">
                    <h2 className="title2">Our Services</h2>
                    <div className="block-list">
                        <ul>
                            <li className="list">
                                <img src={icon1} />
                                <a href="https://contransgroup.com/services/air-freight-forwarding/">Air Freight Forwarding</a>
                                <p>At CCL, we have a highly experienced team of air freight specialists who work on the customer’s needs of cost, tim</p>
                            </li>
                            <li className="list">
                                <img src={icon2} />
                                <a href="https://contransgroup.com/services/sea-freight-forwarding/">Sea Freight Forwarding</a>
                                <p>Water bodies are the main source of transportation for international freight forwarding. Due to this, sea freight fo</p>
                            </li>
                            <li className="list">
                                <img src={icon3} />
                                <a href="https://contransgroup.com/services/road-transportation/">Road Transportation</a>
                                <p>In the freight forwarding business, you are nowhere unless you have a fleet of relia</p>
                            </li>
                            <li className="list">
                                <img src={icon4} />
                                <a href="https://contransgroup.com/services/custom-clearance/">Custom Clearance</a>
                                <p>Customs clearance is an extremely relevant part of CCL’s trading operations. This is so, because without customs c</p>
                            </li>
                            <li className="list">
                                <img src={icon5} />
                                <a href="https://contransgroup.com/services/world-wide-groupage/">World Wide Groupage</a>
                                <p>Groupage forms a very important part of freight forwarding. In this process, CCL brings to together different, multi</p>
                            </li>
                            <li className="list">
                                <img src={icon6} />
                                <a href="https://contransgroup.com/services/storage-distribution/">Storage & Distribution</a>
                                <p>CCL provides a network of storage and distribution facilities in international venues and helps customers enjoy lowe</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
            {/* <div className="carousel-slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img width="224" height="158" src={lowerslide1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img width="224" height="158" src={lowerslide2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img width="224" height="158" src={lowerslide3} className="d-block w-100" alt="..." />
                    </div>
                </div> 
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
        </>
    )
}

export default Home
