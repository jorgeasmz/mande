import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

export default function NewClient() {
  const navigate = useNavigate();

  // Formik Implementation for NewWorker Validation
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
    },
    validationSchema: Yup.object({
      cardNumber: Yup.number("Enter your card number")
        .typeError("Card number must be numeric")
        .required("You must type your account number")
        .min(16, "Card number must be 16 digts")
        .max(16, "Card number must be 16 digits"),
    }),
    onSubmit: (values, actions) => {
      const vals = { ...values };
      actions.resetForm();
      fetch("http://localhost:3001/clients", {
        method: "PUT",
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
          navigate("/user/client");
        });
    },
  });

  const renderForm = (
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <TextField
            label="Card Number"
            name="cardNumber"
            placeholder="0000 0000 0000 0000"
            id="cardNumber"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.cardNumber && Boolean(formik.errors.cardNumber)
            }
            helperText={formik.touched.cardNumber && formik.errors.cardNumber}
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
      <div className="new-user">
        <div className="title">Client Registration</div>
        {renderForm}
      </div>
    </div>
  );
}
