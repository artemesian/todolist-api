const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo: {type: String, required: true},
});

module.exports = mongoose.model('Todo', Todo);