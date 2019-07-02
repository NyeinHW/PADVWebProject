import React from 'react';

export default class Accessory extends React.Component{
    render(){
        return(
            <React.Fragment>
                <tr>
                    <td>
                        {
                            this.props.accessory.name
                        }
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
                   
                </tr>
            </React.Fragment>
        )
    }
}