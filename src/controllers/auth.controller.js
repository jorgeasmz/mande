// Authentication Controller

const { validateLogIn, validateSignUp } = require("./validation");

const sendLogin = (req, res) => {
  validateLogIn(req, res);
};

const sendSignUp = (req, res) => {
  validateSignUp(req, res);
};

module.exports = {
  sendLogin,
  sendSignUp,
};
