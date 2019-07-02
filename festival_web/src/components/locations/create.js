import React from "react";
import Layout from "../home/layout";

export default class CreateLocation extends React.Component{
    render(){
        return(
            <Layout>
                <div className='location container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Create Location</h3>
                            <form action="#" method='post'>
                                <div className='form-group'>
                                    <label htmlFor="place" >Place</label>
                                    <input type='text' id="place" name="place" className='form-control' required/>
                                </div>
                                <button type='submit' className='btn btn-success'>Create</button>
                            </form> 
                        </div>                      
                    </div>  
                </div>
            </Layout>
        )
    }
}