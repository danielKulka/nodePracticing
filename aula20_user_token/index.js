const express = require("express");
const app = express();
const empresa = require(".//router/empresa.router");
const conectTodatabase = require("./database/database");

//importando a conexão com database
conectTodatabase();

const port = 3001;

app.use(express.json());

app.use("/empresa",empresa);

app.get("/", (req,res) =>{
  res.send("hello world");
});

app.post("/login", async (req,res) => {

});

app.get("/contato", (req,res) =>{
  res.send("nosso email: email@123.com");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
});