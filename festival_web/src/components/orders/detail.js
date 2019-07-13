import React from 'react';
import { connect } from 'react-redux';
import {fetchOrderDetail} from "../../actions/orders";
import OrderItem from "../../presentational/order/orderItem";
import Layout from '../home/layout';

class OrderDetail extends React.Component{
    constructor(props){
        super(props);

        this.props.fetchOrderDetail(props.match.params.orderId);
    }
    render(){
        let orders = this.props.order[0];
        let order_items = [];
        if(orders){
            order_items = orders.order_items;
        }
        return(
            <Layout>
                <div className='orderDetail container'>
                    <h4>Order Detail</h4>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Accessory Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Order Date</th>
                                <th>Status</th>
                                <th>Tax</th>
                                <th>Delivery Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order_items !== undefined &&
                                order_items.map((order_item, index) => {
                                    return  <OrderItem key={index} orderItem = {order_item} orders={orders}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    order: state.orders
})

const mapDispatchToProps = {
    fetchOrderDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
