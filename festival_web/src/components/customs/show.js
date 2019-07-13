import React from 'react';
import {fetchCustoms} from "../../actions/customs";
import Custom from '../../presentational/custom/custom';
import { connect } from 'react-redux';
import Layout from '../home/layout';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Customs extends React.Component{
    constructor(props){
        super(props);
        this.props.fetchCustoms();
    }

    render(){
        let customs = this.props.customs;
        return( 
            <Layout>
                <div className="row">
                    <div className='col-6'>
                        <h3>Customs</h3>
                    </div>
                    <div className="col-6 text-right">
                        <Link to="/customs/create" className="btn btn-custom">Create New Custom</Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                customs.map((custom, index) => {
                                    return <Custom key={index} custom={custom}/>
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
    customs : state.customs
})

const maptDispatchToProps = {
    fetchCustoms
}

export default connect(mapStateToProps, maptDispatchToProps)(Customs);