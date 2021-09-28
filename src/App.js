import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/pages/Home';

function App() {
    return (
     <Router>
         <Header/>
         <switch>
          <Route path='/' exact component={Home} />
        </switch>
         <Footer/>
     </Router>
    )
}

export default App
