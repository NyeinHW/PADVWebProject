import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse'
class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            festival: false,
            accessory: false,
            custom: false,
            location: false,
        }
    }
    render(){
        console.log(this.state);
        const {festival} = this.state;
        const {accessory} = this.state;
        const {custom} = this.state;
        const {location} = this.state;

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
                                    <Link to="#" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.setState({ festival: !festival })
                                        }
                                        }
                                        aria-controls="festival"
                                        aria-expanded={festival}>Festival</Link>
                                    <Collapse in={this.state.festival}>
                                        <div id="festival" className="pl-3">
                                            <NavLink activeClassName='active' to="/festivals">Show All</NavLink>
                                            <NavLink activeClassName='active' to="/festivals/create">Create One</NavLink>
                                        </div>
                                    </Collapse>
                                </li>
                                <li>
                                    <Link to="#" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.setState({ accessory: !accessory })
                                        }
                                        }
                                        aria-controls="accessory"
                                        aria-expanded={accessory}>
                                            Accessory
                                    </Link>
                                    <Collapse in={this.state.accessory}>
                                        <div id="accessory" className="pl-3">
                                            <NavLink activeClassName='active' to="/accessories">Show All</NavLink>
                                            <NavLink activeClassName='active' to="/accessories/create">Create One</NavLink>
                                        </div>
                                    </Collapse>
                                </li>
                                <li>
                                    <Link to="#" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.setState({ custom: !custom })
                                        }
                                        }
                                        aria-controls="custom"
                                        aria-expanded={custom}>
                                            Custom
                                    </Link>
                                    <Collapse in={this.state.custom}>
                                        <div id="custom" className="pl-3">
                                            <NavLink activeClassName='active' to="/customs">Show All</NavLink>
                                            <NavLink activeClassName='active' to="/customs/create">Create One</NavLink>
                                        </div>
                                    </Collapse>
                                </li>
                                <li>
                                    <Link to="#" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.setState({ location: !location })
                                        }
                                        }
                                        aria-controls="location"
                                        aria-expanded={location}>
                                            Location
                                    </Link>
                                    <Collapse in={this.state.location}>
                                        <div id="location" className="pl-3">
                                            <NavLink activeClassName='active' to="/locations">Show All</NavLink>
                                            <NavLink activeClassName='active' to="/locations/create">Create One</NavLink>
                                        </div>
                                    </Collapse>
                                </li>
                                {/* <li>
                                    <NavLink activeClassName='active' to="/accessories">Accessories</NavLink>
                                </li> */}
                                <li>
                                    <NavLink activeClassName='active' to="/orders">Orders</NavLink>
                                </li>
                                {/* <li>
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
                                </li> */}
                            </ul>
                        </Route>   
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default SideBar;