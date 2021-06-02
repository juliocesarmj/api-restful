const mongoose = require('mongoose');

//criando os dados que farao parte da tabela
const schema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
});
//determinando o nome da tabela 2 parametros 1- nome da tabela 2- qual tabela
const Model = mongoose.model('products', schema);

module.exports = Model;
