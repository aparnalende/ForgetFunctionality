import React, { Component } from 'react'
import multikart from '../Images/sidebar.png'
import '../Images/images.scss'

class topbar extends Component {
    render() {
        return (
            <div>
                <img src={multikart} style={{float:'left', marginLeft:'5vw'}} alt="" />
                <br></br>
                <button className='btn btn-outline-dark' style={{float:'right', marginRight:'10vw'}}> LogIn / SignUp</button>
                <br></br> <br></br><hr></hr>
            </div>
        )
    }
}

export default topbar
