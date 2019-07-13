import React from 'react';
import {connect} from 'react-redux';
import {fetchFestivals} from "../../actions/festivals";
import Layout from '../home/layout';
import {createCustom} from "../../utilities/apiUrl";
import { postAPI } from '../apis/postAPI';

class CreateCustom extends React.Component{
    constructor(props){
        super(props);

        this.festival_id = React.createRef();
        this.name = React.createRef();
        this.description = React.createRef();

        this.props.fetchFestivals();
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append('festival_id', this.festival_id.current.value);
        formData.append('name', this.name.current.value);
        formData.append('description', this.description.current.value);
        console.log(formData);
        postAPI(createCustom, formData)
        .then(res => {
            window.location.href = window.location.origin+"/customs";
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
                <div className='customs container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Create Customs</h3>
                            <form onSubmit={this.handleOnSubmit} type='multipart/form-data'>
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
                                    <label htmlFor="description" >Description</label>
                                    <textarea type='text' id="description" name="description" className='form-control' ref={this.description} required></textarea>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateCustom);