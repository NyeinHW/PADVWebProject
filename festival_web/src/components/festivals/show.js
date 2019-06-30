import React from 'react';
import {connect} from 'react-redux';
import {fetchFestivals} from "../../actions/festivals";

import Layout from '../home/layout';
import Festival from "../../presentational/festival/festival";

class ShowFestivals extends React.Component{
    constructor(props){
        super(props);
        this.props.fetchFestivals();
    }
    render(){
        let festivals = this.props.festivals;
        return(
            <Layout>
                <div>
                    <h3>Festivals</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                festivals.map((festival, index) => {
                                    return <Festival key={index} festival={festival}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    festivals: state.festivals
})

const mapDispatchToProps = {
    fetchFestivals
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowFestivals);
