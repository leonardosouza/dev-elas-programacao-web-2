// DAO (Data Access Object)
const dbConn = require("../infra/dbConn");
const UserDAO = require("../dao/userDAO")(dbConn);

// SignUp (Cadastrar)
exports.signup = (req, res) => {
  UserDAO.save(req.body, (err) => {
    if (err) {
      res.status(500).json({ message: err })
    } else {
      res.status(201).json({ message: "User added successfully" })
    }
  });
};

// SignIn (Logar)
exports.signin = (req, res) => {
  UserDAO.findOne(req.body, (err, data, pwdIsValid) => {
    if (data && pwdIsValid) {
      res.status(200).json({ message: "Logged in successfully" });
    }

    if (data && !pwdIsValid) {
      res.status(400).json({ message: "User or password is wrong" });
    }

    if (data === undefined) {
      res.status(404).json({ message: "User not found" });
    }

    if (err) {
      res.status(500).json({ message: "Server unavailable" });
    }
  });
};


/*
// Ref Implementacao Alternativa
module.exports = {
  signup: (req, res) => {},
  signin: (req, res) => {}
};
*/
