import React from "react";
import {retrieveToken} from "../../actions/auth";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';
class LoginForm extends React.Component{
    constructor(props){
        super(props);

        this.email = React.createRef();
        this.password = React.createRef();

        this.state = {
            redirect: false
        }
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.retrieveToken(
            this.email.current.value,
            this.password.current.value,
            () => {
                this.setState({redirect: true})
            }
        )
    }
    render(){
        return(
            (this.state.redirect ? <Redirect to='/' /> :
            <div className="login-form">
                <div className='row justify-content-center login-form-wrapper'>
                    <div className="col-3 input-block form-group card px-3">
                        <form onSubmit={this.handleOnSubmit} type='multipart/form-data'>
                            <h4 className='card-title text-center my-4'>Login Here</h4>
                            <div className='form-group'>
                                {/* <label for='email'>Email address</label> */}
                                <input type="email" className='form-control' id='email' name='email' placeholder="Email" ref={this.email} required autoFocus/>
                            </div>
                            <div className='form-group mt-3'>
                                {/* <label for='password'>Password</label> */}
                                <input type="password" className='form-control' id='password' name='password' placeholder="Password" ref={this.password} required/>
                            </div>
                            <button type='submit' className='btn btn-primary w-100 mb-3'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
            )
        );
    }
}

const mapDispatchToProps = {
    retrieveToken
}

export default connect(null, mapDispatchToProps)(LoginForm);