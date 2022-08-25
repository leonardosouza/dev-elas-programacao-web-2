// Importando o Express e Criando o App
const express = require("express");
const app = express();

// Importando Middlewares
const cookieParser = require("cookie-parser");
const getAuthorization = require("./middlewares/authorization");
const sanitizeCPF = require("./middlewares/sanitizeCPF");
const checkStrongPassword = require("./middlewares/checkStrongPassword");

// Variaveis de Ambiente
const { PORT, USER, PASS } = require("dotenv").config().parsed;

// Ativando Middlewares - Nível Aplicação
/*
app.use(
  (req, res, next) => {
    console.log("middleware aplicacao 1");
    next();
  }, 
  (req, res, next) => {
    console.log("middleware aplicacao 2");
    next();
  },
  express.json()
);
*/
app.use(
  express.json(), 
  cookieParser()
);

// Rotas de Aplicacao

// Autenticacao
// Middleware - Nível Roteamento
/*
app.post("/login", 
          (req, res, next) => {
            console.log("middleware 1");
            next();
          }, 
          (req, res, next) => {
            console.log("middleware 2");
            next();
          }, 
          (req, res, next) => {
            console.log("middleware 3");
            next();
          },
          (req, res) => {
            console.log("middleware 4");
            res.end("end: 4");
          }
        );
*/

app.post("/login", sanitizeCPF, checkStrongPassword, (req, res) => {
  const { usr, pwd } = req.body;
  const authentication = (usr === USER && pwd === PASS);

  if (authentication) {
    res
      .cookie("AUTH_APP", authentication)
      .json({ message: "Authenticated" });
  } else {
    res
      .cookie("AUTH_APP", authentication)
      .status(404)
      .json({ message: "Not Authenticated" });
  }
});

app.post("/logout", (req, res) => {
  res
    .clearCookie("AUTH_APP")
    .status(404)
    .json({ message: "Not Authenticated" });
});


// Autorizacao
app.get("/protected", 
  getAuthorization,
  (req, res) => {
    res
      .json({ route: req.path })
  }
);

app.get("/privated", 
  getAuthorization,
  (req, res) => {
    res
      .json({ route: req.path })
  }
);

app.listen(PORT, () => console.log(`Server running at port ${PORT}...`));
