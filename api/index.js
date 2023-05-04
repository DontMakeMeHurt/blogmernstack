const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://blog:Teaa2048@cluster0.irz08ks.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req,res) => {
  const {username, password} = req.body;
  try {
    const userDoc = await User.create({
      username,
      password:bcrypt.hashSync(password,salt)
    });
    res.json(userDoc);
  } catch(e) {
    res.status(400).json(e);
  }
});

app.post('/login', async (req,res) => {
  const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if(passOk) {
    jwt.sign({username,id:userDoc._id}, secret,{}, (err,token) => {
      if(err) throw err;
      res.cookie('token', token).json('ok');
    });
  } else {
    res.status(400).json('wrong credentials');
  }
})

app.get('/profile', (req,res) => {
  res.json(req.cookies);
})

app.listen(4000);