import React from 'react';
import SideBar from '../sidebar/sidebar';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class Layout extends React.Component{
    render(){
        return(
            <div className='container-fluid'>
                <SideBar/>
                <div className='row align-items-center banner navbar navbar-dark bg-dark'>
                    <a href='#' className="navbar-brand">Home</a>
                </div>
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;