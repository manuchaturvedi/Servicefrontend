import React, { Component } from "react";
import './App.css';
import Signin from './signin.js';
import SideBar from './sidebar.js';
import AddAgent from './AddAgent.js';
import background from './background.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  
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
          return <Redirect to='/AddAgent' />
        }
      }
    render() {
        return (
          <div className="kon" >
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="username" placeholder="Enter email" value={this.state.username}  onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password}  onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                {this.renderRedirect()}
                <button className="button" onClick={this.setRedirect}>LOGIN</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            
            </div>
        );
    }
}