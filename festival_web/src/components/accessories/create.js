import React from 'react';
import {connect} from 'react-redux';
import {fetchFestivals} from "../../actions/festivals";
import Layout from '../home/layout';

class CreateAccessory extends React.Component{
    constructor(props){
        super(props);
        this.props.fetchFestivals();
    }
    render(){
        let festivals = this.props.festivals;
        // let optionItems = festivals.map((element, key) => 
        //         <option value={element.id} key={key}>{element.title}</option>
        //     );
        return(
            <Layout>
                <div className='accessories container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Create Accessory</h3>
                            <form action="#" method='post'>
                                <div className='form-group'>
                                    <label htmlFor="festival_id" >Festival</label>
                                    <select name='festival_id' id='festival_id' className='custom-select'>
                                        {
                                           festivals.map((element, key) => 
                                                <option value={element.id} key={key}>{element.title}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="name" >Name</label>
                                    <input type='text' id="name" name="name" className='form-control' required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="price" >Price</label>
                                    <input type='number' id="price" name="price" className='form-control' required />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="quantity" >Quantity</label>
                                    <input type='number' id="quantity" name="quantity" className='form-control' required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="description" >Description</label>
                                    <textarea type='text' id="description" name="description" className='form-control' required></textarea>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="image" >Upload Image</label>
                                    <input type='file' id="image" name="image" className='form-control-file'/>
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
    festivals: state.festivals
})

const mapDispatchToProps = {
    fetchFestivals
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccessory);