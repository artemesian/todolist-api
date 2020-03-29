const mongoose=require('mongoose');
const Todo=require('../models/todo')

const delTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id)
  .then(()=>res.status(200).json("deleted"))
  .catch((error)=>res.status(400).json({error}))
}
module.exports = delTodo
