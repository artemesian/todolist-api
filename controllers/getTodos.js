const mongoose=require('mongoose');
const Todo=require('../models/todo')

const getTodos = (req, res) => {
	console.log("getTodos")
   Todos.find()
  .then((products)=>res.status(200).json(products))
  .catch((error)=>res.status(400).json({error}))
}
module.exports = getTodos
