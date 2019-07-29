const express = require("express");

const server = express();
server.use(express.json());

const users = ["Felipe", "Diego", "Cláudio", "Victor"];

// Query params = ?teste=1
// Route params = /user/1
// Request body = { "name": "Felipe", "email": "feliipmarinho@gmail.com }

// Middleware (interceptador) é sempre chamado independente da rota,
// porem a ordem que ele se encontrar faz diferença.
// É usado para fazer interceptação de rota, validação e etc.
// Esse seria um Middleware Global
server.use((req, res, next) => {
  console.time("Request");
  console.log(`Método: ${req.method}; URL: ${req.url}`); // Nesse caso um middleware de log.

  // fazemos isso para ele continuar o fluxo chamado a requisição referente a rota
  // return next();
  next();
  console.timeEnd("Request");
});

// ter os esses três parametros é um indicativo de middleware req, res, next
function checkUserExists(req, res, next) {
  if (!req.body.nome) {
    return res.status(400).json({ error: "User nome is required" });
  }

  return next();
}

function checkUserInArray(req, res, next) {
  // * Verifica se o usuario está presente no array
  const user = users[req.params.index];
  if (!user) {
    return res.status(400).json({ error: "User does not exist" });
  }
  // Adiciona o usuario encontrado na requisição
  req.user = user;

  return next();
}

server.get("/teste", (req, res) => {
  const nome = req.query.nome; // consumindo o Query params
  return res.json({ message: `Olá ${nome}` });
});

server.get("/users/:index", checkUserInArray, (req, res) => {
  //   const id = req.params.id; // consumindo o Route params
  //   const { index } = req.params; // desestruturação é a msm coisa da linha de cima.
  //   return res.json(users[index]);
  // é possivel acessar o usuario pelo req, pois no middleware 'checkUserInArray'
  // foi adicionado o usuario pois foi realizado uma verificação se o msm já
  // está presente no array*.
  return res.json(req.user);
});

server.get("/users", (req, res) => {
  return res.json(users);
});

server.post("/users", checkUserExists, (req, res) => {
  const { nome } = req.body;
  users.push(nome);
  return res.json(users);
});

server.put("/users/:index", checkUserExists, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { nome } = req.body;

  users[index] = nome;
  return res.json(users);
});

server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
});

server.listen(3000);
