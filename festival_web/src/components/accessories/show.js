import React from 'react';
import Layout from '../home/layout';
import {fetchAccessories} from "../../actions/accessories";
import Accessory from "../../presentational/accessory/accessory";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class Accessories extends React.Component{
    constructor(props){
       super(props);
       this.props.fetchAccessories();
    }

    render(){
        let accessories = this.props.accessories;
        return (
            <Layout>
                <div className="row">
                    <div className='col-6'>
                        <h3>Accessories</h3>
                    </div>
                    <div className="col-6 text-right">
                        <Link to="/accessories/create" className="btn btn-custom">Create New Accessory</Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                accessories.map((accessory, index) => {
                                    return <Accessory key={index} accessory={accessory}/>
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
    accessories: state.accessories
})

const mapDispatchToProps = {
    fetchAccessories
}

export default connect(mapStateToProps, mapDispatchToProps)(Accessories);