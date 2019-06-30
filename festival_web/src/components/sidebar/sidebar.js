import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import CreateCustom from '../customs/create';

class SideBar extends React.Component{
    render(){
        return(
            <div className="sidebar">
                <Router>
                    <Link to="/customs/create">Create Customs</Link>
                </Router>
            </div>
        );
    }
}

export default SideBar;