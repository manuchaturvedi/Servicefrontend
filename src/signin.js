import React, { Component } from "react";
import './SignIn.css';
let time = new Date().toLocaleString();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var d = new Date();
var day = days[ d.getDay() ];
export default class Signin extends Component {
    render() {
        return (
          <div className="koni">
            <form>
                <h2>Add Booking</h2>
                <p>{day}-{time}</p>

                <div className="form-group">
                    <label>Name of customer</label>
                    <input type="email" className="form-control" placeholder="Customer Name" />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address" />
                </div>
                <div className="form-group">
                    <label>Contact No.</label>
                    <input type="number" className="form-control" placeholder="Phone No:." />
                </div>
                <div className="form-group">
                    <label>Query</label>
                    <input type="text" className="form-control" placeholder="Query" />
                </div>
                <div className="form-group">
                    <label>Agent Assigned.</label>
                    <input type="text" className="form-control" placeholder="Agent Name" />
                </div>
                <div className="form-group">
                    <label>Date and Time Alloted.</label>
                    <input type="datetime-local" className="form-control" placeholder="date and time"  />
                </div>
                <button className="button" >Add Booking</button>
            </form>
            </div>
        );
    }
}