import React from 'react';
import Layout from '../home/layout';

class CreateFestival extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout>
                <div className='festival container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Create Festival</h3>
                            <form action="#" method='post'>
                                <div className='form-group'>
                                    <label htmlFor="festival_title" >Title</label>
                                    <input type='text' id="festival_title" name="festival_title" className='form-control' required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="festival_description" >Description</label>
                                    <textarea type='text' id="festival_description" name="festival_description" className='form-control' required></textarea>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="festival_image" >Upload Image</label>
                                    <input type='file' id="festival_image" name="festival_image" className='form-control-file'/>
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

export default CreateFestival;