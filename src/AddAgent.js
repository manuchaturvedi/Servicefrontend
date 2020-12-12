import React, { Component } from "react";
import './SignIn.css';
let time = new Date().toLocaleString();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var d = new Date();
var day = days[ d.getDay() ];
export default class AddAgent extends Component {
    render() {
        return (
          <div className="koni">
            <form>
                <h2>Add Agent</h2>
        <p>{day}-{time}</p>
                <div className="form-group">
                    <label>Name of Agent</label>
                    <input type="email" className="form-control" placeholder="Agent Name" />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address" />
                </div>
                <div className="form-group">
                    <label>Contact No.</label>
                    <input type="number" className="form-control" placeholder="Phone No:" />
                </div>
                <div className="form-group">
                    <label>Join On</label>
                    <input type="datetime-local" className="form-control" placeholder="Join Date"  />
                </div>
                <div className="form-group">
                    <label>UserName Alloted.</label>
                    <input type="text" className="form-control" placeholder="User Name" />
                </div>
                <div className="form-group">
                    <label>Password Alloted.</label>
                    <input type="text" className="form-control" placeholder="Password" />
                </div>

                <button className="button" >Register agent</button>
            </form>
            </div>
        );
    }
}