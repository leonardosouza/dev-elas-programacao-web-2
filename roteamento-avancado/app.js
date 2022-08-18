const env = require("dotenv").config().parsed;

console.log(`=== ${env.APP_NAME} ===`);
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

// Roteamento (Avançado)
// Mapeando Rotas
// app.method("route", callback);

// req - Incoming Message
// res - Server Response
// app.get("/books", function(req, res) {});

// Create
app.post("/books", (req, res) => {
  console.log(`REQUEST POST`);
  res.end(`RESPONSE POST!`)
});

// Read
app.get("/books/:id", (req, res) => {
  // Query Params 
  console.log(`QUERY PARAMS`, req.query);

  // Path Params
  console.log(`PATH PARAMS`, req.params);

  // Body Request
  console.log(`BODY REQ`, req.body);

  res.end(`RESPONSE GET!`)
});

// Update
app.put("/books", (req, res) => {
  res.end(`RESPONSE PUT!`)
});

app.patch("/books", (req, res) => {
  res.end(`RESPONSE PATCH!`)
});

// Delete
app.delete("/books", (req, res) => {
  res.end(`RESPONSE DELETE!`)
});

app.listen(env.PORT, console.log(`Server running at port ${env.PORT}`));
