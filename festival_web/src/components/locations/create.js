import React from "react";
import Layout from "../home/layout";
import {createLocation} from "../../utilities/apiUrl";
import {postAPI} from "../apis/postAPI";

export default class CreateLocation extends React.Component{
    constructor(props){
        super(props);

        this.place = React.createRef();
    }

    handleOnSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('place', this.place.current.value);

        postAPI(createLocation, formData)
        .then(res => {
            console.log("response", res);
            window.location.href = window.location.origin+"/locations";
        })
        .catch(err => {
            console.log(err);
        })
    }
    render(){
        return(
            <Layout>
                <div className='location container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Create Location</h3>
                            <form onSubmit={this.handleOnSubmit} type="multipart/form-data">
                                <div className='form-group'>
                                    <label htmlFor="place" >Place</label>
                                    <input type='text' id="place" name="place" className='form-control' ref={this.place} required/>
                                </div>
                                <button type='submit' className='btn btn-custom'>Create</button>
                            </form> 
                        </div>                      
                    </div>  
                </div>
            </Layout>
        )
    }
}