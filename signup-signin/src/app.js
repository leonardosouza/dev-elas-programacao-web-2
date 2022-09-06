// Importando Modulos
const express = require("express");
const app = express();
const { PORT } = require("dotenv").config().parsed;

// Activate Middlewares
app.use(express.json());

// Routes
const usersRouter = require("../routes/usersRouter");
app.use("/users", usersRouter);

// Inicializando a Aplicação
app.listen(PORT, console.log(`Server running...`));
