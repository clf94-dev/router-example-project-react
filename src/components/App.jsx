import React from 'react';
import '../styles/App.scss';

import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Homepage/Home'


 function App(){
    return (
        <Router>
           <Navbar/>
           <Switch>
               <Route path='/' exact component ={Home}/>
           </Switch>
        </Router>
    )
}

export default App;