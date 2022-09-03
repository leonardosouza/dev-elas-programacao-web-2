// DAO (Data Access Object)
const dbConn = require("../infra/dbConn");
const UserDAO = require("../dao/userDAO")(dbConn);

// SignUp (Cadastrar)
exports.signup = (req, res) => {
  UserDAO.save();
};

// SignIn (Logar)
exports.signin = (req, res) => {
  UserDAO.findOne((err, data) => {
    if (err) {
      res.json({ message: err });
    } else {
      res.json(data);
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
