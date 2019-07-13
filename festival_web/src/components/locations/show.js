import React from 'react';
import {fetchLocations} from "../../actions/locations";
import Location from '../../presentational/location/location';
import { connect } from 'react-redux';
import Layout from '../home/layout';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class Locations extends React.Component{
    constructor(props){
        super(props);
        this.props.fetchLocations();
    }

    render(){
        let locations = this.props.locations;
        return( 
            <Layout>
                <div className="row">
                    <div className='col-6'>
                        <h3>Locations</h3>
                    </div>
                    <div className="col-6 text-right">
                        <Link to="/locations/create" className="btn btn-custom">Create New Location</Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Place</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                locations.map((location, index) => {
                                    return <Location key={index} location={location}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Layout>

        );
    }
}

const mapStateToProps = state => ({
    locations : state.locations
})

const maptDispatchToProps = {
    fetchLocations
}

export default connect(mapStateToProps, maptDispatchToProps)(Locations);