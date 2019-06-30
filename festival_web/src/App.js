import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

import ShowFestivals from './components/festivals/show';
import CreateFestival from './components/festivals/create';
import CreateCustom from './components/customs/create';
import ShowAccessories from './components/accessories/show';
import OrderLists from './components/orders/show';

function App() {
  return (
    <div id='festivals'>
      <Router>
        <Route exact path="/" render={props => <Home {...props}/>}></Route>
        <Route exact path="/festivals" render={props => <ShowFestivals {...props} />}></Route>
        <Route exact path="/festivals/create" render={props => <CreateFestival {...props}/>}></Route>
        <Route exact path="/customs/create" render={props => <CreateCustom {...props}/>}></Route>
        <Route exact path="/accessories" render={props => <ShowAccessories {...props}/>}></Route>
        <Route exact path="/orders" render={props => <OrderLists {...props}/>}></Route>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
