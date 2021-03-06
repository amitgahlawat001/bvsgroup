import React from 'react'
import { useMemo } from 'react'
import topslide1 from '../../images/topslider1.jpg'
import topslide2 from '../../images/topslider2.jpg'
import line from '../../images/hd-line.jpg'
import hdline from '../../images/hd-line2.png'
import line2 from '../../images/home-line3.png'
import Cards from '../card/Cards'
import './home.css'
import { bgSectionData } from '../bgSection/bgSectionData'
import { slideData } from '../lowerslide/sliderData'
import { Link } from 'react-router-dom'



function Home() {

    const bgSection = useMemo(() => {
        return bgSectionData.map((item) => <li key={item.name} className='list'>
            <Link to={item.path}>
            <img src={item.image} alt='' /></Link>
            <p>{item.text}</p>
        </li>)
    }, [])

    const lowerSlider = useMemo(() => {
        return slideData.map((item) => 
        <img className='clients' src={item.image} alt='' />)
    }, [])

    return (
        <>
            <div className='top-slide'>
            <div className="abt-sec">
				<p className="hd-title1">PROVIDING FIRST CLASS</p>
				<p className="hd-title2">FREIGHT SERVICES</p>
                <img width='75%' src={hdline} alt='' />
				<p className="hd-title3">LOGISTIC HELPS YOU REALISE YOUR BUSINESS GOALS</p>
			</div>
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
                <h1 className="title">Welcome to <span>BVS Global logistics</span></h1>

                <div className="sub-txt1">Logistic Helps You Realise Your Business Goals
                    <img width='75%' src={line} alt='' />
                </div>
                <p>BVS Global logistics is an international freight forwarding firm with a strong foothold in the freight forwarding market. The company was founded in 2021 and has seen an upwards graph under the sturdy charge of its Director. Apart from China, the company has a grip on the freight forwarding markets of countries like
                    Southeast Asia, Middle East, Europe and USA.</p>
                <p>The company is known for its customer-based approach to the freight forwarding business and guarantees nothing less than the very best to its customer. At BVS Global, customers are not just firms or individuals involved in business, they are our family and everybody knows that family ALWAYS comes first. We believe in maintaining long-term relationships with our customers and always look out for what's best for them. With competitive rates and equally competitive services, we offer customer satisfaction in the field of sea freight forwarding, air freight forwarding, road transportation , storage, distribution, and international groupage.
                </p>
            </div>
            <div className="list">
                <h3 className="title">OUR SERVICES</h3>
                <img src={line2}/>
                <div className="block-list">
                    {bgSection}
                </div>
            </div>
            <div className="lower-slider">
                <h3>Our Clients</h3>
                <div className="slider">
                {lowerSlider}
                </div>
            </div>
        </>
    )
}

export default Home
