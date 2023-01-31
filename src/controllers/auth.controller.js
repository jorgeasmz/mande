// Authentication Controller

const pool = require("../database/connection");
const bcrypt = require("bcrypt");

const { createPerson } = require("../controllers/person.controller");
const { createUser } = require("../controllers/user.controller");

const { validateLogIn, validateSignUp } = require("./validation");

const sendLogin = async (req, res) => {
  validateLogIn(req, res);

  console.log(req.session);

  const { email, password } = req.body;

  const potentialLogin = await pool.query(
    'SELECT user_id, user_email, user_pword, user_role FROM "user" u WHERE u.user_email = $1',
    [email]
  );

  if (potentialLogin.rowCount > 0) {
    const isSamePass = await bcrypt.compare(
      password,
      potentialLogin.rows[0].user_pword
    );

    if (isSamePass) {

      // Login
      req.session.user = {
        email: email,
        id: potentialLogin.rows[0].identification
      };

      res.json({ loggedIn: true, email, role: potentialLogin.rows[0].user_role });

    } else {
      res.json({ loggedIn: false, status: "Wrong username or password!" });
      console.log("Not good");
    }
  } else {
    console.log("Not good");
    res.json({ loggedIn: false, status: "Wrong username or password!" });
  }
};

const sendSignUp = async (req, res, next) => {
  validateSignUp(req, res);

  const {
    identification,
    email
  } = req.body;

  const existingEmail = await pool.query(
    "SELECT email FROM person WHERE email = $1",
    [email]
  );

  if (existingEmail.rowCount === 0) {
    // Register

    createPerson(req, res, next);
    createUser(req, res, next);

    req.session.user = {
      email: email,
      id: identification
    };

    res.json({ loggedIn: true, email: email });

  } else {
    res.json({ loggedIn: false, status: "Email taken" });
  }
};

module.exports = {
  sendLogin,
  sendSignUp,
};
