const Empresa = require("../model/empresa");

const findByIdEmpresa = (id) => {
  return Empresa.findById(id);
}

const findAllEmpresas = () => {
  return Empresa.find();
}

const createEmpresa = (empresa) => {
  return Empresa.create(empresa);
}

const updateEmpresa = (id, empresa) => {
  return Empresa.findByIdAndUpdate(id, empresa, {returnDocument: "after"});
}

const deleteEmpresa = (id) => {
  return Empresa.findByIdAndRemove(id);
}

module.exports = {
  findByIdEmpresa,
  findAllEmpresas,
  createEmpresa,
  updateEmpresa,
  deleteEmpresa
}