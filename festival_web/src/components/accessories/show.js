import React from 'react';
import Layout from '../home/layout';

export default class ShowAccessories extends React.Component{
    render(){
        return (
            <Layout>
                {/* <div>
                    <h3>Accessories</h3>
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
                </div> */}
                Accessories Detail
            </Layout>
        );
    }
}