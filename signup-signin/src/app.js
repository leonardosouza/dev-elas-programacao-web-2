// Importando Modulos
const express = require("express");
const app = express();
const { PORT } = require("dotenv").config().parsed;

// Routes
const usersRouter = require("../routes/usersRouter");
app.use("/users", usersRouter);

// Inicializando a Aplicação
app.listen(PORT, console.log(`Server running...`));
