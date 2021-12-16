import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import AboutUs from './component/pages/aboutUs/aboutUs';
import Aim from './component/pages/AIM/aim';
import Clients from './component/pages/clients/clients';
import Home from './component/pages/Home';
import AirFreightForwarding from './component/pages/services/AirFreightForwarding';
import CustomClearance from './component/pages/services/CustomClearance';
import DoorToDoor from './component/pages/services/DoorToDoor';
import Exim from './component/pages/services/Exim';
import InboundGroupage from './component/pages/services/InboundGroupage';
import OutboundGroupage from './component/pages/services/OutboundGroupage';
import RoadTransportation from './component/pages/services/RoadTransportation';
import SeaFreightForwarding from './component/pages/services/SeaFreightForwarding';
import StorageDistribution from './component/pages/services/StorsgeDistribtion';
import WorldWideGroupage from './component/pages/services/WorldWideGroupage';
import ContactUs from './component/contactUs/ContactUs';
import Career from './component/pages/career/Career';
import WorldClock from './component/pages/utilities/WorldClock/WorldClock';
import CurrencyConverter from './component/pages/utilities/CurrencyConverter';


function App() {
    return (
        <BrowserRouter basename="/bvsgroup">
            <Header />
                <Route path='/' exact component={Home} />
                <Route path='/AboutUs' component={AboutUs} />
                <Route path='/aim' component={Aim} />
                <Route path='/clients' component={Clients} />
                <Route path='/career' component={Career} />
                <Route path='/SeaFreightForwarding' component={SeaFreightForwarding} />
                <Route path='/AirFreightForwarding' component={AirFreightForwarding} />
                <Route path='/CustomClearance' component={CustomClearance} />
                <Route path='/DoorToDoor' component={DoorToDoor} />
                <Route path='/EXIMConsultancy' component={Exim} />
                <Route path='/RoadTransportation' component={RoadTransportation} />
                <Route path='/StorageDistribution' component={StorageDistribution} />
                <Route path='/WorldWideGroupage' component={WorldWideGroupage} />
                <Route path='/InboundGroupage' component={InboundGroupage} />
                <Route path='/OutboundGroupage' component={OutboundGroupage} />
                <Route path='/WorldClock' component={WorldClock} />
                <Route path='/CurrencyConverter' component={CurrencyConverter} />
                <Route path='/ContactUs' component={ContactUs} />
            <Footer />
        </BrowserRouter>
    )
}

export default App