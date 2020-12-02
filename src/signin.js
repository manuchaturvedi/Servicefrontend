import React, { Component } from "react";
import './SignIn.css';
export default class Signin extends Component {
    render() {
        return (
          <div className="koni">
            <form>
                <h2>Add Booking</h2>

                <div className="form-group">
                    <label>Name of customer</label>
                    <input type="email" className="form-control" placeholder="Custimer Name" />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address" />
                </div>
                <div className="form-group">
                    <label>Contact No.</label>
                    <input type="text" className="form-control" placeholder="Enter phone no." />
                </div>
                <div className="form-group">
                    <label>query</label>
                    <input type="text" className="form-control" placeholder="Query" />
                </div>
                <div className="form-group">
                    <label>Agent Assigned.</label>
                    <input type="text" className="form-control" placeholder="Enter agent name" />
                </div>
                <div className="form-group">
                    <label>Date and time alloted.</label>
                    <input type="text" className="form-control" placeholder="date and time" />
                </div>

                <button type="submit" className="btn btn-warning btn-block">Register Booking</button>
            </form>
            </div>
        );
    }
}