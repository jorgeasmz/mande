import React, { useState } from "react";
import "./SignUp.css";
import "../../App.css";
import { TextField, Button } from "@mui/material";

export default function SignUp() {
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
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
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
        <div className="input-signup-container">
          <TextField
            variant="filled"
            label="First Name"
            name="lname"
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-signup-container">
          <TextField variant="filled" label="Last Name" name="lname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-signup-container">
          <TextField
            variant="filled"
            label="Email"
            name="email"
            type="email"
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-signup-container">
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
      <div className="sign-up">
        <div className="title">Sign Up</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}
