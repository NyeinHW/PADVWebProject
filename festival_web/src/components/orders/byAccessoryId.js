import React from 'react';
import OrderByAccessory from "../../presentational/order/orderByAccessoryId";
import { connect } from 'react-redux';
import {fetchOrderByAccessoryId} from "../../actions/orders";
import Layout from "../home/layout";


class OrderListsByAccessoryId extends React.Component{
    constructor(props){
        super(props);

        this.props.fetchOrderByAccessoryId(props.match.params.accessoryId);
    }

    render(){
        let datas = this.props.orders;
        let ordersByAccessory = [];
        let accessory_name = null;
        if(datas.length != 0){
            ordersByAccessory = datas;
            accessory_name = datas[0].accessory_name;
        }
        
        return(
            <Layout>
                <div className="container">
                    <h4>{accessory_name}</h4>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Buyer</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Order Date</th>
                                <th>Tax</th>
                                <th>Delivery Fee</th>
                                <th>Status</th>
                            </tr>
                            {
                                ordersByAccessory!== undefined &&    
                                ordersByAccessory.map((order, index) => {
                                    return <OrderByAccessory key={index} order_item={order} />;
                                })
                            }
                        </thead>
                    </table>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    orders : state.orders
})

const mapDispatchToProps = {
    fetchOrderByAccessoryId
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderListsByAccessoryId);