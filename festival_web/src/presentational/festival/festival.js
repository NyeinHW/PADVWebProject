import React from 'react';

export default class Festival extends React.Component{
    render(){
        return(
            <React.Fragment>
                <tr>
                    <td>
                        {
                            this.props.festival.title
                        }
                    </td>
                    <td>
                        {
                            this.props.festival.description
                        }
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}