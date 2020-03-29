const mongoose=require('mongoose');
const User=require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const signUp = (req, res) => {
  const { name, email, password } = req.body

  console.log("signUp")
  bcrypt.hash(password, saltRounds).then(function(hash) {

  let User = new User({
    name,
    email,
    hash,
  })

   User.save()
  .then(()=>res.status(200).json("user added"))
  .catch((error)=>res.status(400).json({error}))
  });
}
module.exports = signUp
