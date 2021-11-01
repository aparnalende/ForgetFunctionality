import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import LogInImage from '../Images/login.png'
import '../Images/images.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class UserSignInComponent extends Component {

    state = {
        email: '',
        password: '',
        redirect: false,
        authError: false,
        isLoading: false,
        location: {},
    };

    handleEmailChange = event => {
        this.setState({email: event.target.value});
    };
    handlePwdChange = event => {
        this.setState({password: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const url = 'http://localhost:4000/user/login';
        const body = {
            email : this.state.email,
            password : this.state.password,
           }
        axios.post(url, body)
            .then(result => {
                if (result.data.status === "success") {
                    this.setState({redirect: true, isLoading: false});
                    localStorage.setItem('isLoggedIn', true);
                    toast.success("User has been logIn successfully");
                }
                else{
                    this.setState({authError: true, isLoading: false});
                }
            })
    };
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/dashboard" />
        }
    };

    render() {
    const isLoading = this.state.isLoading;
        return (
            <div>
            <div className="flex-container">
              <div className="flex-child-first"> <img src={LogInImage} alt=""/> </div>
                <div className="flex-child">
                   <div className="card card-login mx-auto mt-5"> 
                    <h5>Login</h5>
                    <div className="card-body" >
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                <h6>Email ID / Username</h6> 
                                    <input className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputEmail" placeholder="Email address" type="text" name="email" onChange={this.handleEmailChange} autoFocus required/>
                                  
                                    <div className="invalid-feedback">
                                        Please provide a valid Email.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                <h7>Password</h7> 
                                    <input type="password" className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputPassword" placeholder="******" name="password" onChange={this.handlePwdChange} required/>
                                    <div className="invalid-feedback">
                                        Please provide a valid Password.
                                    </div>
                                </div>
                            </div>
                            <div className="text-justify">
                            <Link className="d-block small mt-3" to={'forgetpassword'}>Forgot Password?</Link>
                        </div>
                        <br></br>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Login &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <Link className="d-block small mt-3" to={'register'}>New user? Signup</Link>
                        </div>
                    </div>
                </div>
                </div>
                
                {this.renderRedirect()}
            </div>
            </div>
        );
    }
}

