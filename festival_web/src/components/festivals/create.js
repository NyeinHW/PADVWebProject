import React from 'react';
import Layout from '../home/layout';
import { connect } from 'react-redux';
import {fetchCustoms} from "../../actions/customs"; 
import {createFestival} from "../../utilities/apiUrl";
import {postAPI} from "../apis/postAPI";

class CreateFestival extends React.Component{
    constructor(props){
        super(props);
        this.title = React.createRef();
        this.start_date = React.createRef();
        this.end_date = React.createRef();
        this.description = React.createRef();
        this.images = React.createRef();

        this.props.fetchCustoms(); 
        this.state = ({
            custom_id_list : [

            ]
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        let custom_id_list = [];
        let custom_list = this.state.custom_id_list;
        custom_list.forEach((item, index)=>{
            custom_id_list.push(item.id);
        });
        const formData = new URLSearchParams();
        formData.append('title', this.title.current.value);
        formData.append('start_date', this.start_date.current.value);
        formData.append('end_date', this.end_date.current.value);
        formData.append('description', this.description.current.value);
        formData.append('images', this.images.current.value);
        formData.append('name', custom_id_list);
        postAPI(createFestival, formData)
        .then(res => {
            window.location.href = window.location.origin+"/festivals";
        })
        .catch(err => {
            console.log(err);
        });
    }

    toggleCheckCustom = (event) => {
        let custom_list = this.state.custom_id_list;
        let key = event.target.dataset.key;
        if(custom_list.length != 0){
            custom_list = custom_list.filter((item, index) => {
                console.log(item.key == key);
               if(item.key != key){
                    return item;
               }
            })
        }
        else{
            let custom = {
                key: key,
                id: event.target.value
            }
            custom_list.push(custom);
        }
        console.log(custom_list);
        this.setState({
            custom_id_list: custom_list
        })
    }

    render(){
        let customs = this.props.customs;
        return (
            <Layout>
                <div className='festival container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Create Festival</h3>
                            <form onSubmit={this.handleOnSubmit}>
                                <div className='form-group'>
                                    <label htmlFor="title" >Title</label>
                                    <input type='text' id="title" name="title" className='form-control' ref={this.title} required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="start_date" >Start Date</label>
                                    <input type='date' id="start_date" name="start_date" className='form-control' ref={this.start_date} required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="end_date" >End Date</label>
                                    <input type='date' id="end_date" name="end_date" className='form-control' ref={this.end_date} required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="description" >Description</label>
                                    <textarea type='text' id="description" name="description" className='form-control' ref={this.description} required></textarea>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="images" >Upload Image</label>
                                    <input type='file' id="images" name="images" className='form-control-file' ref={this.images} multiple/>
                                </div>
                                <label htmlFor="custom_id">Custom</label>
                                <div className='row'>
                                    {
                                        customs.map((custom, index) => 
                                            <div className="col-2 border-right border-bottom" key={index}>
                                                <div className="row flex-nowrap">
                                                    <div className='col-1'>
                                                        <input type="checkbox" value={custom.name} key={index} className="" onChange={this.toggleCheckCustom} data-key={index}/>
                                                    </div>
                                                    <div className='col-11'>
                                                        <label htmlFor="" className="w-100">{custom.name}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
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
    customs : state.customs
})

const maptDispatchToProps = {
    fetchCustoms
}

export default connect(mapStateToProps, maptDispatchToProps)(CreateFestival);