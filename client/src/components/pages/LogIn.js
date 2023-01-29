import React from "react";
import { useFormik } from "formik";
import "./LogIn.css";
import "../../App.css";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

export default function LogIn() {
  // Formik Implementation for LogIn Validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
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
      fetch("http://localhost:3000/auth/log-in", {
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
        <div className="input-login-container">
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
        <div className="input-login-container">
          <TextField
            label="Password"
            name="password"
            id="password"
            type="password"
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
      <div className="log-in">
        <div className="title">Log In</div>
        {renderForm}
      </div>
    </div>
  );
}
