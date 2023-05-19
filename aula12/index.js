const jsonEntrada = '{"nome":"Daniel","idade":25,"professor":true,"turmas":[12,34,35],"endereco":{"rua":"17 de maio","numero":755,"bairro":"centro","cep":"123.231-31"}}'

const obj = JSON.parse(jsonEntrada);

console.log(obj);

obj.turmas.map(function(valor,posicao){
  console.log(`posição: ${posicao}, valor: ${valor}`);
});

obj.nome += " Kulka";
obj.salario = 25000;

console.log(obj.salario);
console.log(obj);

const jsonString = JSON.stringify(obj);
console.log(jsonString);