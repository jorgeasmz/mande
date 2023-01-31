import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

export default function LogIn() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string("Enter your email")
          .email("Enter a valid email")
          .required("You must type your email"),
        password: Yup.string("Enter your password").required(
          "You must type your password"
        ),
      })}
      onSubmit={(values, actions) => {
        const vals = { ...values };
        actions.resetForm();
        fetch("http://localhost:3001/auth/log-in", {
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
            if (data.role === 2) {
              navigate("/user/client");
            } else {
              navigate("/user/worker");
            }
          });
      }}
    >
      {(formik) => (
        <div className="entry">
          <div className="log-in">
            <div className="title">Log In</div>
            <div className="form">
              <Form>
                <div className="input-container">
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
                <div className="input-container">
                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </div>
                <div className="button-container">
                  <Button variant="contained" color="primary" type="submit">
                    Accept
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
