import React from 'react';

export default class OrderItem extends React.Component{
    render(){
        return(
            <React.Fragment>
                <tr>
                    <td>
                        {
                            this.props.orderItem.accessory_id
                        }
                    </td>
                    <td>
                        {
                            this.props.orderItem.price
                        }
                    </td>
                    <td>
                        {
                            this.props.orderItem.quantity
                        }
                    </td>
                    <td>
                        {
                            this.props.orderItem.total_price
                        }
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}