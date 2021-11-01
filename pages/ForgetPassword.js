import axios from 'axios';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../Images/images.scss'

class ForgetPassword extends Component {
    state = {
        authError: false,
        isLoading: false,
        location: {},
    };

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email : this.email
        }
        axios.post(`http://localhost:4000/user/forgetpassword/`, data).then(
            response => {
               response.data.data.forEach(element => {
                   localStorage.setItem("id", JSON.stringify(element.id))
               });
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    };

    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="conatiner">
                <div className="flex-child">
                   <div className="card card-login mx-auto mt-5"> 
                    <h5>Forgot your Password</h5>
                    <div className="card-body" >
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                <h6>Enter your Email address</h6> 
                                    <input className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputEmail" placeholder="Email address" type="text" name="email" onChange={e => this.email = e.target.value} autoFocus required/>
                                    <div className="invalid-feedback">
                                        Please provide a valid Email.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Recover Password &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                                <Link className="text-center d-block small mt-3" to={''}>Return to Login</Link>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ForgetPassword
