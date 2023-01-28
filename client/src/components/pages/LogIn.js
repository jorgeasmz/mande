import React, { useState } from "react";
import "./LogIn.css";
import "../../App.css";
//import "../../../../src/routes/user.routes"
import { Button, TextField } from "@mui/material";
//import { getAllUsers } from "../../../../src/controllers/user.controller";

export default function LogIn() {

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.user_email === uname.value);

    // Compare user info
    if (userData) {
      if (userData.user_pword !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-login-container">
          <TextField variant="filled" label="Username" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-login-container">
          <TextField
            variant="filled"
            label="Password"
            name="pass"
            type="password"
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <Button variant="contained" color="primary" type="submit">
            Accept
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="entry">
      <div className="log-in">
        <div className="title">Log In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}
