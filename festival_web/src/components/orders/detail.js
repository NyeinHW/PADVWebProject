import React from 'react';
import { connect } from 'react-redux';
import {fetchOrderDetail} from "../../actions/orders";
import OrderItem from "../../presentational/order/orderItem";

class OrderDetail extends React.Component{
    constructor(props){
        super(props);

        this.props.fetchOrderDetail(props.match.params.orderId);
    }
    render(){
        // let order_items = order.order_items;
        let order_items = [];
        return(
            <div className='orderDetail container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order_items.map((order_item, index) => {
                                return  <OrderItem orderItem = {order_item}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
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