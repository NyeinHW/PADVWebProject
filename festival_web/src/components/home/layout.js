import React from 'react';
import SideBar from '../sidebar/sidebar';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import profile_img from '../../assets/images/user.png';

class Layout extends React.Component{

    hideSideBar = () => {
        console.log('hidesideBar');
    }

    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2 sidebar'>
                        <SideBar/>
                    </div>
                    <div className='col-10'>
                        <div className='row align-items-center banner navbar navbar-dark'>
                            <Link to="" className="navbar-brand"><span onClick={this.hideSideBar}><i className="fas fa-bars"></i></span></Link>
                            {
                                this.props.token == null ? 
                                (
                                   <img src={profile_img} className="profile-img"/>
                                ) : ''
                            }
                        </div>
                        <div className='row content p-3'>
                            <div className="col-12">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const matStateToProps = state => ({
    token: state.auth
})

export default connect(matStateToProps)(Layout);