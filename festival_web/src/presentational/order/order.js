import React from 'react';

export default class Order extends React.Component{
    render(){
        return(
            <React.Fragment>
                <tr>
                    <td>
                        {
                            this.props.order.user_id
                        }
                    </td>
                    <td>
                        {
                            this.props.order.order_date
                        }
                    </td>
                    <td>
                        {
                            this.props.order.tax
                        }
                    </td>
                    <td>
                        {
                            this.props.order.delivery_fee
                        }
                    </td>
                    <td>
                        {
                            this.props.order.total_price
                        }
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}