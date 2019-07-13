import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

class SideBar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className='row'>
                    <h3 className="p-2">
                        <Link to="/">Festival</Link>
                    </h3>
                </div>
                <div className='row'>
                    <div className='col-12 p-0'>
                        <Route>
                            <ul>
                                <li>
                                    <NavLink activeClassName='active' to="/festivals">Festivals</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='active' to="/accessories">Accessories</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='active' to="/orders">Orders</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='active' to="/customs">Customs</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='active' to="/locations">Locations</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='active' to="/festivals/create">Create Festival</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='active' to="/customs/create">Create Custom</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='active' to="/accessories/create">Create Accessory</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='active' to="/locations/create">Create Location</NavLink>
                                </li>
                            </ul>
                        </Route>   
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default SideBar;