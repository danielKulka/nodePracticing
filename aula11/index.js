const json = '{"nome":"Daniel","idade": 25,"professor": false}'
const obj = JSON.parse(json);

console.log(json);
console.log(obj);


const pessoa = {
  nome: "Daniel",
  sobrenome: "Kulka",
  idade: 25,
  altura: 1.91,
  professor: false,

  envelhecer: function(){
    this.idade =+ 1;
  }
}

console.log(pessoa);

const json2 = JSON.stringify(pessoa);

console.log(json2);