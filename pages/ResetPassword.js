import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../Images/images.scss'

const temp = JSON.parse(localStorage.getItem("id"));
export class ResetPassword extends Component {
    state = {
        password: '',
        authError: false,
        isLoading: false,
        location: {},
    };
    handlePwdChange = event => {
        this.setState({password: event.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({isLoading: true});
        const body = {
            password : this.state.password,
           }
        console.log(temp)
        axios.post(`http://localhost:4000/user/resetpassword/${temp}`, body).then(
            response => {
                console.log(response)
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
                    <h5>Reset your Password</h5>
                    <div className="card-body" >
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                <h6>New Password</h6> 
                                    <input className="form-control" id="inputEmail" placeholder="New Password" type="text" name="newpassword" onChange={this.handlePwdChange}  required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                <h6>Confirm Password</h6> 
                                    <input className="form-control" id="inputEmail" placeholder="Confirm Password" type="text" name="confirmpassword" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Submit &nbsp;&nbsp;&nbsp;
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

export default ResetPassword
