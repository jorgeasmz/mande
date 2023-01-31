import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        identification: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        role: "2",
      }}
      validationSchema={Yup.object({
        identification: Yup.number("Enter your id number")
          .typeError("Identification must me a number")
          .required("You must type your id number"),
        firstName: Yup.string("Enter your first name").required(
          "You must type your first name"
        ),
        lastName: Yup.string("Enter your last name").required(
          "You must type your last name"
        ),
        phoneNumber: Yup.number("Enter your phone number")
          .typeError("Phone is not a number")
          .required("You must type your phone number"),
        email: Yup.string("Enter your email")
          .email("Enter a valid email")
          .required("You must type your email"),
        password: Yup.string("Enter your password").required(
          "You must type your password"
        ),
        role: Yup.string("Select a role").required("You must select a role"),
      })}
      onSubmit={(values, actions) => {
        const vals = { ...values };
        actions.resetForm();
        fetch("http://localhost:3001/auth/sign-up", {
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
              navigate("/sign-up/new-client");
            } else {
              navigate("/sign-up/new-worker");
            }
          });
      }}
    >
      {(formik) => (
        <div className="entry">
          <div className="sign-up">
            <div className="title">Sign Up</div>
            <div className="form">
              <Form>
                <div className="input-container">
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
                      formik.touched.identification &&
                      formik.errors.identification
                    }
                  />
                </div>
                <div className="input-container">
                  <TextField
                    label="First Name"
                    name="firstName"
                    id="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                </div>
                <div className="input-container">
                  <TextField
                    label="Last Name"
                    name="lastName"
                    id="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </div>
                <div className="input-container">
                  <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.phoneNumber &&
                      Boolean(formik.errors.phoneNumber)
                    }
                    helperText={
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                    }
                  />
                </div>
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
                    type="password"
                    name="password"
                    id="password"
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
                <div className="input-container">
                  <FormLabel>Register As:</FormLabel>
                  <RadioGroup
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      label="Client"
                      name="role"
                      id="frole"
                      value="2"
                      control={<Radio />}
                    />
                    <FormControlLabel
                      label="Worker"
                      name="role"
                      id="srole"
                      value="3"
                      control={<Radio />}
                    />
                  </RadioGroup>
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
