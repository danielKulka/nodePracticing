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
  let found = false;

  empresas.map( function(valor){
    if(valor.id == id){
      found = true;
      return res.send(valor);
    }
  });
  
  if(!found){
    res.status(404).send({message: "empresa não encontrada"})
  }
}

const findAllEmpresas = (req,res) => {
  res.send(empresas);
}

const createEmpresa = (req,res) => {
  const empresa = req.body;
  if(Object.keys(empresa).length === 0){
    return res.status(400).send({message:"o corpo da mensagem está vazio"});
  }

  if(!empresa.id){
    return res.status(400).send({message:"campo 'id' não encontrado!"})
  }

  if(!empresa.nome){
    return res.status(400).send({message:"campo 'nome' não encontrado!"})
  }

  if(!empresa.numFuncionarios){
    return res.status(400).send({message:"campo 'numFuncionarios' não encontrado!"})
  }

  empresa.nacionalidade = "brasileira";
  empresas.push(empresa);
  res.status(201).send(empresas);
}

const updateEmpresa = (req,res) => {
  const id = req.params.id;
  const empresa = req.body;
  let found = false;

  if(Object.keys(empresa).length === 0){
    return res.status(400).send({message:"o corpo da mensagem está vazio"});
  }

  if(!empresa.id){
    return res.status(400).send({message:"campo 'id' não encontrado!"})
  }

  if(!empresa.nome){
    return res.status(400).send({message:"campo 'nome' não encontrado!"})
  }

  if(!empresa.numFuncionarios){
    return res.status(400).send({message:"campo 'numFuncionarios' não encontrado!"})
  }

  empresas.map( function(valor,index){
    if(valor.id == id){
      found = true;
      empresas[index] = empresa;
      return res.send(empresas[index]);
    }
  });
  
  if(!found){
    res.status(404).send({message: "empresa não encontrada"})
  }
}

const deleteEmpresa = (req,res) => {
  const id = req.params.id;
  let found = false;

  empresas.map( function(valor, index){
    if(valor.id == id){
      found = true;
      empresas.splice(index,1);
      return res.send(valor);
    }
  });
  
  if(!found){
    res.status(404).send({message: "empresa não encontrada"})
  }
}

module.exports = {
  find,
  findAllEmpresas,
  createEmpresa,
  updateEmpresa,
  deleteEmpresa
}