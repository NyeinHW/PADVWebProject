import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

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
                        <Router>
                            <ul>
                                <li>
                                    <Link to="/festivals">Festivals</Link>
                                </li>
                                <li>
                                    <Link to="/accessories">Accessories</Link>
                                </li>
                                <li>
                                    <Link to="/orders">Orders</Link>
                                </li>
                                <li>
                                    <Link to="/customs">Customs</Link>
                                </li>
                                <li>
                                    <Link to="/locations">Locations</Link>
                                </li>
                                <li>
                                    <Link to="/festivals/create">Create Festival</Link>
                                </li>
                                <li>
                                    <Link to="/customs/create">Create Custom</Link>
                                </li>
                                <li>
                                    <Link to="/accessories/create">Create Accessory</Link>
                                </li>
                                <li>
                                    <Link to="/locations/create">Create Location</Link>
                                </li>
                            </ul>
                        </Router>   
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default SideBar;