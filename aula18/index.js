const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req,res) =>{
  res.send("hello world");
});

//conectando o mongoose
app.get("/mongo", (req,res) => {
  mongoose.connect("mongodb://localhost:27017/teste-gatos");

  //objeto esquema
  const catSchema = {
    "nome": String,
    "idade": Number,
    "genero": String,
    "porte": String,
    "peso": Number,
    "docil": Boolean
  }

  //criação do modelo
  const Cat = mongoose.model("Gato", catSchema);

  //objeto preenchido
  const gato = {
    nome: "Thomas",
    idade: 5,
    genero: "M",
    porte: "medio",
    peso: 5.6,
    docil: true
  }

  //preenchendo o esquema com as infomações do objeto
  const kitty = new Cat(gato);
  
  //salvando no banco de dados
  kitty.save().then(() => console.log("saved cat :)"));
  res.send("successful cat save");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
});