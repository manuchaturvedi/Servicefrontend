import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

export default function Logout() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 const renderRedirect = () => {
    console.log("hello");
    window.location.replace("https://manuchaturvedi.github.io/Servicefrontend/");
      return <Redirect to='/BookingTable' />
    
  }
  return (
    <div>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Logout from the Service Booking System"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Please Click on the Logout button to logout of the website,Press cancel to stay on the Site.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className="button">
            Cancel
          </button>
          <button onClick={renderRedirect} className="button">
            Logout
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
