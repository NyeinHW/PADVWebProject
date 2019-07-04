import React from "react";

export default class LoginForm extends React.Component{
    render(){
        return(
            <div className="login-form">
                <div className='row justify-content-center login-form-wrapper'>
                    <div className="col-3 input-block form-group card px-3">
                        <form action="#" method="POST">
                            <h4 className='card-title text-center my-4'>Login Here</h4>
                            <div className='form-group'>
                                {/* <label for='email'>Email address</label> */}
                                <input type="email" className='form-control' id='email' name='email' placeholder="Email" required autofocus/>
                            </div>
                            <div className='form-group mt-3'>
                                {/* <label for='password'>Password</label> */}
                                <input type="password" className='form-control' id='password' name='password' placeholder="Password" required/>
                            </div>
                            <button type='submit' className='btn btn-primary w-100 mb-3'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}