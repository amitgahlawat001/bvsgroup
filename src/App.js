import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
    return (
     <Router>
         <Header/>
         <Footer/>
     </Router>
    )
}

export default App
