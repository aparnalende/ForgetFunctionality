import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import SignupImage from '../Images/Signup.png'
import '../Images/images.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class UserSignupComponent extends Component {

    state = {
        firstName: '',
        lastName:'',
        status:'',
        email: '',
        password: ''
    };
    handleFirstNameChange = event => {
        this.setState({ firstName: event.target.value });
    };

    handleLastNameChange = event => {
        this.setState({ lastName: event.target.value });
    };
    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };
    handlePwdChange = event => {
        this.setState({ password: event.target.value });
    };
    handleStatusChange = event => {
        this.setState({ status: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const url = 'http://localhost:4000/user/signup';
        const body = {
         firstName : this.state.firstName,
         lastName : this.state.lastName,
         email : this.state.email,
         status : this.state.status,
         password : this.state.password,
        }
        axios.post(url, body)
            .then(result => {
                this.setState({isLoading: false});
                if (result.data.status !== 'fail') {
                    this.setState({redirect: true, authError: true});
                    toast.success("User has been logIn successfully");
                }else {
                    this.setState({redirect: false, authError: true});
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({ authError: true, isLoading: false });
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    };
    

    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="flex-container">
                   <div className="flex-child-first"> <img src={SignupImage} alt=""/> </div>
                <div className="flex-child">
                <div className="card card-login mx-auto mt-5">
                <h5>Sign up as New user</h5>
                <Link className="d-block small mt-3" to={''}>or Alredy register? Login Now</Link>

                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="inputFirstName" className="form-control" placeholder="firstName"  name="firstName" onChange={this.handleFirstNameChange} required/>
                                    <label htmlFor="inputFirstName">First Name</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="inputLastName" className="form-control" placeholder="lastName"  name="lastName" onChange={this.handleLastNameChange} required/>
                                    <label htmlFor="inputLastName">Last Name</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="inputStatus" className="form-control"  placeholder="status"  name="status" onChange={this.handleStatusChange} required/>
                                    <label htmlFor="inputStatus">Status</label>
                                </div>
                            </div>   

                            <div className="form-group">
                                <div className="form-label-group">
                                    <input id="inputEmail" className="form-control" placeholder="Email address" type="text" name="email" onChange={this.handleEmailChange} autoFocus required/>
                                    <label htmlFor="inputEmail">Email ID</label>
                                    <div className="invalid-feedback">
                                        Please provide a valid Email. or Email Exis
                                    </div>
                                </div>
                            </div>                        
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="******"  name="password" onChange={this.handlePwdChange} required/>
                                    <label htmlFor="inputPassword">Create Password</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="confirmpassword" className="form-control" id="confirmPassword" placeholder="******"  name="confirmpassword" required/>
                                    <label htmlFor="inputPassword">Confirm Password</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Register Now &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                        </div>
                    </div>
                </div>
                {this.renderRedirect()}
                </div>
            </div>
        );
    }
}

