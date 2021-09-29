import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import AboutUs from './component/pages/aboutUs/aboutUs';
import Aim from './component/pages/AIM/aim';
import Clients from './component/pages/clients/clients';
import Home from './component/pages/Home';

function App() {
    return (
     <Router>
         <Header/>
         <switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={AboutUs}/>
          <Route path='/aim' component={Aim}/>
          <Route path='/clients' component={Clients}/>
        </switch>
         <Footer/>
     </Router>
    )
}

export default App
