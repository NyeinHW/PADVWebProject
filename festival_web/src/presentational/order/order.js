import React from 'react';
import {Link} from "react-router-dom";
import {status} from "../../constants/orderStatus";

export default class Order extends React.Component{
    render(){
        return(
            <React.Fragment>
                <tr>
                    <td>
                        
                        <Link to={"/orders/"+this.props.order.id+"/detail"}>
                            {this.props.order.id}
                        </Link>
                    </td>
                    <td>
                        {this.props.order.user_name}
                    </td>
                    <td>
                        {
                            this.props.order.order_date
                        }
                    </td>
                    <td>
                        {
                            status(this.props.order.status_id)
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