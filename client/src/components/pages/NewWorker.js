import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  FormGroup,
  InputLabel,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import { Label, PhotoCamera } from "@mui/icons-material";

export default function NewWorker() {
  const navigate = useNavigate();

  const FILE_SIZE = 160 * 1024;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];

  return (
    <Formik
      initialValues={{ acctNumber: "", idScan: "" }}
      validationSchema={Yup.object({
        acctNumber: Yup.number("Enter your account number")
          .typeError("Account number must be numeric")
          .required("You must type your account number"),
        idScan: Yup.mixed().required("You must select a valid id scan"),
      })}
      onSubmit={(values, actions) => {
        const vals = { ...values };
        actions.resetForm();
        fetch("http://localhost:3001/workers", {
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
            navigate("/user/worker");
          });
      }}
    >
      {(formik) => (
        <div className="entry">
          <div className="new-user">
            <div className="title">Worker Registration</div>
            <div className="form">
              <Form>
                <div className="input-container">
                  <TextField
                    label="Account Number"
                    name="acctNumber"
                    id="acctNumber"
                    value={formik.values.acctNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.acctNumber &&
                      Boolean(formik.errors.acctNumber)
                    }
                    helperText={
                      formik.touched.acctNumber && formik.errors.acctNumber
                    }
                  />
                </div>
                <div className="input-container">
                  <FormLabel>Select an id scan</FormLabel>
                  <Button
                    variant="contained"
                    startIcon={<PhotoCamera />}
                    color="primary"
                    component="label"
                  >
                    Upload
                    <input
                      accept="image/*"
                      name="idScan"
                      id="idScan"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="file"
                      hidden
                    />
                    <label name="idScan" id="idScan"></label>
                  </Button>
                  <Field
                    name="idScan"
                    label="Select id scan"
                    component={InputLabel}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.idScan && formik.touched.idScan ? (
                    <InputLabel error="true">{formik.errors.idScan}</InputLabel>
                  ) : (
                    formik.values.idScan
                  )}
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
