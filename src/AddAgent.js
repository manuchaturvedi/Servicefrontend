import React, { Component } from "react";
import './SignIn.css';
export default class AddAgent extends Component {
    render() {
        return (
          <div className="koni">
            <form>
                <h2>Add Agent</h2>

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
                    <input type="text" className="form-control" placeholder="Enter phone no." />
                </div>
                <div className="form-group">
                    <label>Join on</label>
                    <input type="text" className="form-control" placeholder="Join Date" />
                </div>
                <div className="form-group">
                    <label>UserName Alloted.</label>
                    <input type="text" className="form-control" placeholder="Enter user name" />
                </div>
                <div className="form-group">
                    <label>Password alloted.</label>
                    <input type="text" className="form-control" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-success btn-block">Add Agent</button>
            </form>
            </div>
        );
    }
}