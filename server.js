const express=require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose=require('mongoose');
const routes=require('./routes/routes');
const MongoClient = require('mongodb').MongoClient;

const app=express();

const url = 'mongodb://localhost:27017';

const dbName = 'todolist';

const client = new MongoClient(url,{ useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

client.connect()
.then(()=>console.log('Connection Success!'))
.catch(()=>console.log('Connection Failed!'));

app.use('/',routes)

app.listen(3001,()=>console.log('listening on port 3001'))