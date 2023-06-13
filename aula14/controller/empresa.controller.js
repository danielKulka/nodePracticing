const empresas = [
   {
    id: 1,
    nome: "empresa1",
    numFuncionarios: 100
   },
   {
    id: 2,
    nome: "empresa2",
    numFuncionarios: 200
   },
   {
    id: 3,
    nome: "empresa3",
    numFuncionarios: 300
   },
   {
    id: 4,
    nome: "empresa4",
    numFuncionarios: 400
   }
]

const find = (req,res) => {
  const id = req.params.id;
  res.send(empresas[id]);
}

const findAllEmpresas = (req,res) => {
  res.send(empresas);
}

const createEmpresa = (req,res) => {
  const empresa = req.body;
  if(req.body.nome == null){
    return res.send({message:"o corpo da mensagem está vazio"});
  }
  empresas.push(empresa);
  res.send(empresas);
}

module.exports = {
  find,
  findAllEmpresas,
  createEmpresa
}