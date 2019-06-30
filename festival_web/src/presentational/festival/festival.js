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
                    <td>
                        {
                            this.props.festival.start_date
                        }
                    </td>
                    <td>
                        {
                            this.props.festival.end_date
                        }
                    </td>
                    <td>
                        {
                            this.props.festival.location.map((location, index)=>{
                                return (
                                    location+","
                                )
                            })
                        }
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}