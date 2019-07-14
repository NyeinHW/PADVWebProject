import React from 'react';

export default class Custom extends React.Component{
    render(){
        return(
            <React.Fragment>
                <tr>
                    <td>
                        {
                            this.props.custom.id
                        }
                    </td>
                    <td>
                        {
                            this.props.custom.name
                        }
                    </td>
                    <td>
                        {
                            this.props.custom.description
                        }
                    </td>
                    {/* <td>
                        <i className="far fa-trash-alt"></i>
                    </td> */}
                </tr>
            </React.Fragment>
        );
    }
}