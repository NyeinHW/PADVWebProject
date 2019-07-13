import React from 'react';
import {fetchFestivalDetail} from "../../actions/festivals";
import { connect } from 'react-redux';
import Layout from '../home/layout';


class FestivalDetail extends React.Component{
    constructor(props){
        super(props);
        console.log(props.match.params.festivalId);
        this.props.fetchFestivalDetail(props.match.params.festivalId);
    }

    render(){
        let festival = [];
        console.log(festival);
        let locations = [];
        let accessories = [];
        if(this.props.festivals.length != 0){
            festival = this.props.festivals[0];
            locations = festival.location;
            accessories = festival.accessories;
        }
        return(
            <Layout>
                <div className='container'>
                    <h4>{festival.title}</h4>
                    <table className='table'>
                    <tbody>
                        <tr>
                            <th>Start Date</th>
                            <td>{festival.start_date}</td>
                        </tr>
                        <tr>
                            <th>End Date</th>
                            <td>{festival.end_date}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{festival.description}</td>
                        </tr>
                        <tr>
                            <th>Locations</th>
                            <td>
                            {
                                locations !== undefined && locations.map((location,index)=> 
                                    location + ","
                                )
                            }
                            </td>
                        </tr>
                            
                        <tr>
                            <th>Accessories</th>
                            <td>
                            {
                                accessories !== undefined && accessories.map((accessory,index)=> 
                                    
                                    accessory.name +","
                                    
                                )
                            }
                            </td>
                        </tr>

                    </tbody>
                    </table>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    festivals: state.festivals
})

const mapDispatchToProps = {
    fetchFestivalDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(FestivalDetail);
