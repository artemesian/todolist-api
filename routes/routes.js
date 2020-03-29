const express = require('express');
const router = express.Router();

const delTodo = require('../controllers/delTodo.js');
const getTodos = require('../controllers/getTodos.js');
const addTodo = require('../controllers/addTodo.js');
const signUp = require('../controllers/signUp.js');
const signIn = require('../controllers/signIn.js');

router.get('/todos', (req, res)=> getTodos(req, res))
router.put('/add', (req,res)=> addTodo(req,res))
router.post('/signup', (req, res) =>signUp(req, res))
router.post('/sigin', (req, res)=> signIn(req, res))
router.delete('/del/:id', (req, res) =>delTodo(req, res))

module.exports= router