import React from 'react';

export default class Location extends React.Component{
    render(){
        return(
            <React.Fragment>
                <tr>
                    <td>
                        {
                            this.props.location.id
                        }
                    </td>
                    <td>
                        {
                            this.props.location.place
                        }
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}