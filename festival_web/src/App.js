import React from 'react';
import './App.css';
import Home from './components/home/home';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import LoginForm from "./components/loginForm/loginForm";

import ShowFestivals from './components/festivals/show';
import CreateFestival from './components/festivals/create';
import FestivalDetail from "./components/festivals/detail";

import Customs from './components/customs/show';
import CreateCustom from './components/customs/create';

import Accessories from './components/accessories/show';
import CreateAccessory from './components/accessories/create';

import OrderLists from './components/orders/show';
import OrderListsByAccessoryId from './components/orders/byAccessoryId';
import OrderDetail from './components/orders/detail';

import Locations from './components/locations/show';
import CreateLocation from './components/locations/create';
import { connect } from 'react-redux';

class App extends React.Component {
  render(){
    return (
        <Router>
          <Route exact path="/login" render={props => {
            return (
              this.props.token != null ? <Redirect to="/" /> : <LoginForm {...props}/>
              )
          }}></Route>
          <Route exact path="/" render={props => {
            return (
              this.props.token != null ? <Redirect to="/login" /> : <Home {...props}/>
              )
          }}></Route>

          <Route exact path="/festivals" render={props => {
            return (
              this.props.token != null ? <Redirect to="/login" /> : <ShowFestivals {...props} />
              )
            }}></Route>
          <Route exact path="/festivals/create" render={props => {
            return (
              this.props.token != null ? <Redirect to="/login" /> : <CreateFestival {...props}/>
              )
            }}></Route>
          <Route exact path="/festivals/:festivalId/detail" render={props => {
            return (
              this.props.token != null ? <Redirect to="/login" /> : <FestivalDetail {...props}/>
              )
            }}></Route>

          <Route exact path="/customs" render={props => {
            return (
              this.props.token != null ? <Redirect to="/login" /> : <Customs {...props}/>
              )
            }}></Route>
          <Route exact path="/customs/create" render={props => {
            return (
              this.props.token != null ? <Redirect to="/login" /> : <CreateCustom {...props}/>
              )
            }}></Route>

          <Route exact path="/accessories" render={props => {
            return (
              this.props.token != null ? <Redirect to="/login" /> : <Accessories {...props}/>
              )
            }}></Route>
          <Route exact path="/accessories/create" render={props => {
            return (
              this.props.token != null ? <Redirect to="/login" /> : <CreateAccessory {...props}/>
              )
            }}></Route>

          <Route exact path="/orders" render={props => {
            return (
              this.props.token != null ? <Redirect to="/login" /> : <OrderLists {...props}/>
              )
            }}></Route>
          <Route exact path="/orders/accessory/:accessoryId" render={props => {
            return (
              this.props.token != null ? <Redirect to="/login" /> : <OrderListsByAccessoryId {...props}/>
              )
            }}></Route>
          <Route exact path="/orders/:orderId/detail" render={props => {
            return (
              this.props.token != null ? <Redirect to="/login" /> : <OrderDetail {...props}/>
              )
            }}></Route>

          <Route exact path="/locations" render={props => {
            return (
              this.props.token != null ? <Redirect to="/login" /> : <Locations {...props}/>
              )
            }}></Route>
          <Route exact path="/locations/create" render={props => {
            return (
              this.props.token != null ? <Redirect to="/login" /> : <CreateLocation {...props}/>
              )
            }}></Route>
        </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  token : state.auth
}) 

export default connect(mapStateToProps)(App);
