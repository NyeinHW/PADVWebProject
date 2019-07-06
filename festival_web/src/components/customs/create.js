import React from 'react';
import {connect} from 'react-redux';
import {fetchFestivals} from "../../actions/festivals";
import Layout from '../home/layout';

class CreateCustom extends React.Component{
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
                <div className='customs container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Create Customs</h3>
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
                                    <label htmlFor="description" >Description</label>
                                    <textarea type='text' id="description" name="description" className='form-control' required></textarea>
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