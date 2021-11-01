import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import '../Images/Dashboard.scss'
import A from "../Images/a.png"
import B from "../Images/b.png"
import C from "../Images/c.png"



class Dashboard extends Component {
  state = {
    users: [],
    ActiveCount: [],
    InActiveCount: []
  };
  componentDidMount() {
    axios.get(`http://localhost:4000/user/`).then((res) => {
      const users = res.data.data
      console.log(users)
      const ActiveCount = users.filter(user => user.status === "Active")
      const InActiveCount = users.filter(user => user.status === "In-Active")
      this.setState({ users, ActiveCount, InActiveCount });
    });
  }
  render() {
    return (
      <div className='Info-Card'>
        <h4>Dashboard</h4>
        <div className="container">
          <div className="flex-container">
            <div className="flex-child">
              <h6>Total Users</h6>
              <h5>{this.state.users.length}</h5>
              <img class="img-fluid" style={{ width: '40%' }} src={A} alt="card A " />
            </div>
            <div className="flex-child">
              <h6>Active Users</h6>
              <h5>{this.state.ActiveCount.length}</h5>
              <img class="img-fluid" style={{ width: '40%' }} src={B} alt="card B " />
            </div>
            <div className="flex-child">
              <h6>In-Active Users</h6>
              <h5>{this.state.InActiveCount.length}</h5>
              <img class="img-fluid" style={{ width: '40%' }} src={C} alt="card C " />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
