class Pessoa{
  constructor(nome, idade, altura, genero){
    this.nome = nome,
    this.idade = idade,
    this.altura = altura,
    this.genero = genero
  }

  infos = function(){
    return this.nome + " " + this.idade;
  }
}

class Professor extends Pessoa{
  constructor (nome, idade, altura, genero, salario, turmas){
    super(
      nome,
      idade,
      altura,
      genero,
    );
    this.salario = salario,
    this.turmas = turmas
  }
  infos = function(){
    return this.nome + " " + this.turmas + " " + this.salario;
  }
}

class Aluno extends Pessoa{
  constructor (nome, idade, altura, genero, nota, turma, RM){
    super(
      nome,
      idade,
      altura,
      genero,
    );
    this.nota = nota,
    this.turmas = turma,
    this.RM = RM
  }
  infos = function(){
    return this.nome + " " + this.idade + " " + this.RM;
  }
}

const professor1 = new Professor("Daniel",25,1.91,"M",10000,["1B","1D","2C"]);
const estudante = new Aluno("Nicole", 16, 1.64, "F", 8.67, "1D", 54323);

console.log(professor1);
console.log(estudante);

console.log(professor1.infos());
console.log(estudante.infos());