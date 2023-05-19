const pessoa = {
  nome: "Daniel",
  sobrenome: "Kulka",
  peso: 95.7,
  idade: 25,

  envelhecer: function(anos){
    this.idade += anos;
  }
};

console.log(typeof(pessoa));
pessoa.envelhecer(3);
console.log(pessoa.idade);