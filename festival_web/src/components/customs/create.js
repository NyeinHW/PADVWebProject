import React from 'react';
import Layout from '../home/layout';

class CreateCustom extends React.Component{
    render(){
        return(
            <Layout>
                <div className='customs container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Create Customs</h3>
                            <form action="#" method='post'>
                                <div className='form-group'>
                                    <label htmlFor="festival_id" >Festival</label>
                                    <select name='festival_id' id='festival_id' className='custom-select'>
                                        <option value='1'>New Year</option>
                                        <option value='2'>New Year</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="custom_name" >Name</label>
                                    <input type='text' id="custom_name" name="custom_name" className='form-control' required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="custom_description" >Description</label>
                                    <textarea type='text' id="custom_description" name="custom_description" className='form-control' required></textarea>
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

export default CreateCustom;