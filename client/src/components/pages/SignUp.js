import React from "react";
import { useFormik } from "formik";
import "./SignUp.css";
import "../../App.css";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

export default function SignUp() {
  // Formik Implementation for LogIn Validation
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      identification: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string("Enter your first name").required(
        "You must type your first name"
      ),
      lastName: Yup.string("Enter your last name").required(
        "You must type your last name"
      ),
      identification: Yup.number("Enter your id number")
        .typeError("Identification must me a number")
        .required("You must type your id number"),
      email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("You must type your email"),
      password: Yup.string("Enter your password").required(
        "You must type your password"
      ),
    }),
    onSubmit: (values, actions) => {
      const vals = { ...values };
      actions.resetForm();
      fetch("http://localhost:3000/auth/sign-up", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vals),
      })
        .catch((err) => {
          return;
        })
        .then((res) => {
          if (!res || !res.ok || res.status >= 400) {
            return;
          }
          return res.json();
        })
        .then((data) => {
          if (!data) return;
          console.log(data);
        });
    },
  });

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
        <div className="input-signup-container">
          <TextField
            label="First Name"
            name="firstName"
            id="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </div>
        <div className="input-signup-container">
          <TextField
            label="Last Name"
            name="lastName"
            id="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </div>
        <div className="input-signup-container">
          <TextField
            label="Identification"
            name="identification"
            id="identification"
            value={formik.values.identification}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.identification &&
              Boolean(formik.errors.identification)
            }
            helperText={
              formik.touched.identification && formik.errors.identification
            }
          />
        </div>
        <div className="input-signup-container">
          <TextField
            label="Email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className="input-signup-container">
          <TextField
            label="Password"
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
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
        {renderForm}
      </div>
    </div>
  );
}
