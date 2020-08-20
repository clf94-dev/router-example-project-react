import React from 'react';
import '../styles/App.scss';

import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Homepage/Home'
import Services from './pages/Services/Services'
import Prices from './pages/Pricing/Pricing';


 function App(){
    return (
        <Router>
           <Navbar/>
           <Switch>
               <Route path='/' exact component ={Home}/>
               <Route path='/services' exact component ={Services}/>
               <Route path='/pricing' exact component ={Prices}/>
           </Switch>
        </Router>
    )
}

export default App;