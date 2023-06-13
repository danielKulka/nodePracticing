const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req,res) =>{
  res.send("hello world");
})

app.get("/contato", (req,res) =>{
  res.send("nosso email: email@123.com");
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})