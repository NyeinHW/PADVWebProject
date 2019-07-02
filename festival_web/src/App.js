import React from 'react';
import './App.css';
import Home from './components/home/home';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import ShowFestivals from './components/festivals/show';
import CreateFestival from './components/festivals/create';

import Customs from './components/customs/show';
import CreateCustom from './components/customs/create';

import Accessories from './components/accessories/show';
import CreateAccessory from './components/accessories/create';

import OrderLists from './components/orders/show';

import Locations from './components/locations/show';
import CreateLocation from './components/locations/create';

function App() {
  return (
    <div id='festivals'>
      <Router>
        <Route exact path="/" render={props => <Home {...props}/>}></Route>

        <Route exact path="/festivals" render={props => <ShowFestivals {...props} />}></Route>
        <Route exact path="/festivals/create" render={props => <CreateFestival {...props}/>}></Route>

        <Route exact path="/customs" render={props => <Customs {...props}/>}></Route>
        <Route exact path="/customs/create" render={props => <CreateCustom {...props}/>}></Route>

        <Route exact path="/accessories" render={props => <Accessories {...props}/>}></Route>
        <Route exact path="/accessories/create" render={props => <CreateAccessory {...props}/>}></Route>

        <Route exact path="/orders" render={props => <OrderLists {...props}/>}></Route>

        <Route exact path="/locations" render={props => <Locations {...props}/>}></Route>
        <Route exact path="/locations/create" render={props => <CreateLocation {...props}/>}></Route>
      </Router>
    </div>
  );
}

export default App;
