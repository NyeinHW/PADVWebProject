import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class Festival extends React.Component{
    render(){
        return(
            <React.Fragment>
                <tr>
                    <td>
                        
                        <Link to={`/festivals/${this.props.festival.id}/detail`}>
                            {this.props.festival.title}
                        </Link>
                        
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
                    {/* <td>
                        <i className="far fa-trash-alt"></i>
                    </td> */}
                </tr>
            </React.Fragment>
        )
    }
}