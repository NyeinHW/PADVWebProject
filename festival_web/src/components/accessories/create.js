import React from 'react';
import {connect} from 'react-redux';
import {fetchFestivals} from "../../actions/festivals";
import Layout from '../home/layout';
import {createAccessory} from "../../utilities/apiUrl";
import { postAPI } from '../apis/postAPI';

class CreateAccessory extends React.Component{
    constructor(props){
        super(props);
        this.props.fetchFestivals();

        this.festival_id = React.createRef();
        this.name = React.createRef();
        this.price = React.createRef();
        this.quantity = React.createRef();
        this.description = React.createRef();
        this.images = React.createRef();
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append('festival_id', this.festival_id.current.value);
        formData.append('name', this.name.current.value);
        formData.append('price', this.price.current.value);
        formData.append('quantity', this.quantity.current.value);
        formData.append('description', this.description.current.value);
        formData.append('images', this.images.current.value);
        console.log(formData);
        postAPI(createAccessory, formData)
        .then(res => {
            console.log(res);
            // window.location.href = window.location.origin+"/accessories";
        })
        .catch(err => {
            console.log(err);
        });
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
                            <form onSubmit={this.handleOnSubmit} type="multipart/form-data">
                                <div className='form-group'>
                                    <label htmlFor="festival_id" >Festival</label>
                                    <select name='festival_id' id='festival_id' className='custom-select' ref={this.festival_id}>
                                        {
                                           festivals.map((element, key) => 
                                                <option value={element.id} key={key}>{element.title}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="name" >Name</label>
                                    <input type='text' id="name" name="name" className='form-control' ref={this.name} required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="price" >Price</label>
                                    <input type='number' id="price" name="price" className='form-control' ref={this.price} required />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="quantity" >Quantity</label>
                                    <input type='number' id="quantity" name="quantity" className='form-control' ref={this.quantity} required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="description" >Description</label>
                                    <textarea type='text' id="description" name="description" className='form-control' ref={this.description} required></textarea>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="images" >Upload Image</label>
                                    <input type='file' id="images" name="images" className='form-control-file' ref={this.images}/>
                                </div>
                                <button type='submit' className='btn btn-custom'>Create</button>
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