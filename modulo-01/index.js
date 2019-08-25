const express = require("express");

const server = express();

server.use(express.json());

// Query Params = ?page=2
// Route Params = /users/1
// Request Body = { "name": "Leandro" }

//CRUD - Create, Read, Update, Delete

const users = ["Diego", "Robson", "Victor"];

//Middleware global
server.use((req, res, next) => {
  // console.log("Requisição foi chamada");
  console.time("Request");
  console.log(`Método: ${req.method}; URL: ${req.url}`);

  next();

  //O que vier abaixo do next só será executado quando
  // ação da chamada terminar

  console.timeEnd("Request");
});

function checkUsersExists(req, res, next) {
  if (!req.body.users)
    return res.status(400).json({ error: "User name is required" });

  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index];

  if (!user) return res.status(400).json({ error: "User does not exists" });

  req.user = user;

  return next();
}

server.get("/users", (req, res) => {
  return res.json(users);
});

server.post("/users", checkUsersExists, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put("/users/:index", checkUsersExists, checkUserInArray, (req, res) => {
  // const { index } = req.params;
  // const { name } = req.body;

  // users[index] = name;

  // Req.user foi preenchida pelo middlware checkUserInArray
  return res.json(req.user);
});

server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send({ ok: true });
});

server.get("/users/:index", checkUserInArray, (req, res) => {
  // const name = req.query.name;
  // const { id } = req.params;
  const { index } = req.params;

  // return res.json({ express: `Hello ${name}` });
  // return res.json({ express: `Find user by id: ${id}` });
  return res.json(users[index]);
});

server.listen(4000);
