import React from 'react';
import {connect} from 'react-redux';
import {fetchFestivals} from "../../actions/festivals";

import Layout from '../home/layout';
import Festival from "../../presentational/festival/festival";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class ShowFestivals extends React.Component{
    constructor(props){
        super(props);
        this.props.fetchFestivals();
    }
    render(){
        let festivals = this.props.festivals;
        return(
            <Layout>
                <div className='row'>
                    <div className='col-6'>
                        <h3>Festivals</h3>
                    </div>
                    <div className="col-6 text-right">
                        <Link to="/festivals/create" className="btn btn-success">Create New Festival</Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Locations</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                festivals.map((festival, index) => {
                                    return <Festival key={index} festival={festival}/>
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
    festivals: state.festivals
})

const mapDispatchToProps = {
    fetchFestivals
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowFestivals);
