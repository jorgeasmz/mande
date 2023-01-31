const Yup = require("yup");

const logInSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("You must type your email"),
  password: Yup.string("Enter your password").required(
    "You must type your password"
  ),
});

const validateLogIn = (req, res) => {
  const formData = req.body;
  logInSchema
    .validate(formData)
    .catch((err) => {
      res.status(422).send();
      console.log(err.errors);
    })
    .then((valid) => {
      if (valid) {
        //res.status(200).send();
        console.log("Form is valid");
      }
    });
};

const signUpSchema = Yup.object({
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
});

const validateSignUp = (req, res) => {
  const formData = req.body;
  signUpSchema
    .validate(formData)
    .catch((err) => {
      res.status(422).send();
      console.log(err.errors);
    })
    .then((valid) => {
      if (valid) {
        //res.status(200).send();
        console.log("Form is valid");
      }
    });
};

module.exports = {
  validateLogIn,
  validateSignUp,
};
