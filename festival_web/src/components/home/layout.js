import React from 'react';
import SideBar from '../sidebar/sidebar';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class Layout extends React.Component{

    hideSideBar = () => {
        console.log('hidesideBar');
    }

    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2'>
                        <SideBar/>
                    </div>
                    <div className='col-10'>
                        <div className='row align-items-center banner navbar navbar-dark bg-dark'>
                            <a href='#' className="navbar-brand"><span onClick={this.hideSideBar}><i className="fas fa-bars"></i></span></a>
                        </div>
                        <div className='row content'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;