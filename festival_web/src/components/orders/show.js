import React from 'react';

import Layout from '../home/layout';

import {fetchOrders} from "../../actions/orders";
import Order from "../../presentational/order/order";
import { connect } from 'react-redux';

class OrderLists extends React.Component{
    constructor(props){
        super(props);
        this.props.fetchOrders();
    }
    render(){
        let orders = this.props.orders;
        console.log("orders", orders);
        return(
            <Layout>
                <div>
                    <h3>Orders List</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Order Date</th>
                                <th>Status Id</th>
                                <th>Tax</th>
                                <th>Delivery Fee</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                orders.map((order, index) => {
                                    return <Order key={index} order={order}/>
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
    orders : state.orders
})

const mapDispatchToProps = {
    fetchOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderLists);
