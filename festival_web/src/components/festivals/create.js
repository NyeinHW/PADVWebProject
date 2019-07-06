import React from 'react';
import Layout from '../home/layout';
import baseUrl from "../../utilities/baseUrl";
import { connect } from 'react-redux';
import {fetchCustoms} from "../../actions/customs"; 

class CreateFestival extends React.Component{
    constructor(props){
        super(props);

        this.props.fetchCustoms();    
    }

    render(){
        let customs = this.props.customs;
        return (
            <Layout>
                <div className='festival container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Create Festival</h3>
                            <form action={`${baseUrl}/api/festival/createFestival`} method='post'>
                                <div className='form-group'>
                                    <label htmlFor="title" >Title</label>
                                    <input type='text' id="title" name="title" className='form-control' required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="start_date" >Start Date</label>
                                    <input type='date' id="start_date" name="start_date" className='form-control' required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="end_date" >End Date</label>
                                    <input type='date' id="end_date" name="end_date" className='form-control' required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="description" >Description</label>
                                    <textarea type='text' id="description" name="description" className='form-control' required></textarea>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="images" >Upload Image</label>
                                    <input type='file' id="images" name="images" className='form-control-file' multiple/>
                                </div>
                                <label htmlFor="custom_id">Custom</label>
                                <div className='row'>
                                    {
                                        customs.map((custom, index) => 
                                            <div className="col-2 border-right">
                                                <div class="row flex-nowrap">
                                                    <div className='col-1'>
                                                        <input type="checkbox" value={custom.id} className=""/>
                                                    </div>
                                                    <div className='col-11'>
                                                        <label htmlFor="" className="w-100">{custom.name}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                <button type='submit' className='btn btn-success'>Create</button>
                            </form> 
                        </div>                      
                    </div>  
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    customs : state.customs
})

const maptDispatchToProps = {
    fetchCustoms
}

export default connect(mapStateToProps, maptDispatchToProps)(CreateFestival);