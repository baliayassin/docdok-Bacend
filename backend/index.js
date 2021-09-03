const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const userRouter = require('./routes/userRoute');


connectDB();

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  app.use(express.json());
    
app.use('/insert',userRouter)
app.use('/findUser/',userRouter)
app.use('/updateUser/',userRouter)


  const PORT = process.env.PORT || 3000;


  app.listen(PORT, () => {
    console.log(`app listening at http://192.168.1.112:${PORT}`)
  })
