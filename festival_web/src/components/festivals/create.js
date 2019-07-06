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
                                    <label htmlFor="title" >Title</label>
                                    <input type='text' id="title" name="title" className='form-control' required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="description" >Description</label>
                                    <textarea type='text' id="description" name="description" className='form-control' required></textarea>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="images" >Upload Image</label>
                                    <input type='file' id="images" name="images" className='form-control-file'/>
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