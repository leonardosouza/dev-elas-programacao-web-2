// importando o express
const express = require("express");
const app = express();

// importando o dotenv
const env = require("dotenv").config().parsed;

// configurando aplicacao
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));

// routes
const uploadRouter = require("../routes/upload");
app.use("/", uploadRouter);

// inicializando a aplicacao
app.listen(env.PORT, console.log(`Server running at port ${env.PORT}...`));
