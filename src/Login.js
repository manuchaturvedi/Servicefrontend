import React, { Component } from "react";
import './App.css';
import Signin from './signin.js';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SideBar from './sidebar.js';
import AddAgent from './AddAgent.js';
import background from './background.png';
import halfback from './halfback.png';
import {IconContext} from "react-icons";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  
  function Header() {
    // Import result is the URL of your image
    return <img width={300} height={250} src={halfback} alt="Logo" />;
  }
export default class Login extends Component {
    constructor(props) {
    super(props);
        this.state = {
        redirect: false,
        username:'',
        password:''
      }
      this.handleChange = this.handleChange.bind(this);
    }
      setRedirect = () => {
       if(this.state.username=='admin' && this.state.password=='admin')
        this.setState({
          redirect: true
        })
      }
      handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/BookingTable' />
        }
      }
    render() {
        return (
          <div className="container">
            <div className="logo">

              <p>SERVICE BOOKING <br/> SYSTEM</p>
              <Header/>
              <h6>Powered By:</h6>
               <h5> NCS Technologies
              </h5>
              <div style={{color: '',padding:'5px',}}>
              <IconContext.Provider
                  value={{ color: '#25d366', size: '50px' }} >
              <FaIcons.FaWhatsappSquare size={45}  />
          </IconContext.Provider>
          <IconContext.Provider
                  value={{ color: '#0e76a8', size: '50px' }} >
                <FaIcons.FaLinkedinIn  size={45}/>
          </IconContext.Provider>
          <IconContext.Provider
                  value={{ color: '#3c2ec0', size: '50px' }} >
                <AiIcons.AiFillMail size={45} />
                </IconContext.Provider>
                </div>

            </div>
            <div class="vl"></div>

          <div className="kon" >
            <form>

                <div className="form-groups">
                    <label>Login</label>
                    <input type="email" className="form-control" name="username" placeholder="Enter email" value={this.state.username}  onChange={this.handleChange}/>
                </div>

                <div className="form-groups">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password}  onChange={this.handleChange}/>
                </div>
                {this.renderRedirect()}
                <button className="button" onClick={this.setRedirect}>LOGIN</button>
                
                <button className="lic" >Licence Expire in:173 days</button>

            </form>
            
            </div>
            </div>
        );
    }
}