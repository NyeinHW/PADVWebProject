import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import CreateCustom from '../customs/create';
import { ReactReduxContext } from 'react-redux';

class SideBar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h3>Festival</h3>
                <span></span>
                <Router>
                    <Link to="/customs/create">Create Customs</Link>
                </Router>
            </React.Fragment>
        );
    }
}

export default SideBar;