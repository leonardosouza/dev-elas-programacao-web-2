const env = require("dotenv").config().parsed;

console.log(`=== ${env.APP_NAME} ===`);
const express = require("express");
const app = express();

// Parseando Body Request
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

// Roteamento (Básico)
// Mapeando Rotas
// app.method("route", callback);

// req - Incoming Message
// res - Server Response
// app.get("/books", function(req, res) {});

const handler = (req, res) => {
  // Query Params 
  console.log(`QUERY PARAMS`, req.query);

  // Path Params
  console.log(`PATH PARAMS`, req.params);

  // Body Request
  console.log(`BODY REQ`, req.body);

  res.end(`RESPONSE ${req.method}!`)
};

// Create
app.post("/books", handler);

// Read
app.get("/books", handler);

// Update
app.put("/books", handler);
app.patch("/books", handler);

// Delete
app.delete("/books", handler);


// Roteamento (Avançado)
// Caracteres Especiais: ? + * () |

const advancedHandler = (req, res) => {
  console.log(`ROUTE: ${req.method} ${req.url}`);
  res.end(`END: ${req.url}`);
};

// ? Opcional 
app.get("/pages?", advancedHandler);

// + Repetidor
app.get("/ses+ion", advancedHandler);

// * Tudo
app.get("/auth*", advancedHandler);

// () Agrupador
// | Ou
app.get("/den(ied|y)", advancedHandler);
app.get("/front(-end|end)?", advancedHandler);

// Expressão Regular
app.get(/(server|client)\-?side/, advancedHandler);

app.get(/(cep|postalcode)\/\d{5}\-?\d{3}/, advancedHandler);

app.listen(env.PORT, console.log(`Server running at port ${env.PORT}`));
