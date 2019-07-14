import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class Accessory extends React.Component{
    render(){
        return(
            <React.Fragment>
                <tr>
                    <td>
                        {/* <Link to={`/orders/accessory/${this.props.accessory.id}`}> */}
                            {this.props.accessory.name}
                        {/* </Link> */}
                    </td>
                    <td>
                        {
                            this.props.accessory.price
                        }
                    </td>
                    <td>
                        {
                            this.props.accessory.quantity
                        }
                    </td>
                    <td>
                        {
                            this.props.accessory.description
                        }
                    </td>
                    {/* <td>
                        <i className="far fa-trash-alt"></i>
                    </td> */}
                    <td>
                        <Link to={`/orders/accessory/${this.props.accessory.id}`}>
                            <span><i class="fas fa-history"></i></span>
                        </Link>
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}