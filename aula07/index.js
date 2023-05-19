function carro(modelo, ano, marca, combustivel){
  this.modelo =  modelo,
  this.ano = ano,
  this.marca = marca,
  this.combustivel = combustivel
}

let carros = [];

carros[0] = new carro("fusca",1969,"vw","gasolina");

carros[1] = new carro("uno",2020,"fiat","flex");
console.log(carros[0]);