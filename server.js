const express = require("express");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())
const path = require('path');
require("dotenv").config()
const dotenv = require("dotenv");
dotenv.config(`${process.env.SECRET_KEY}`);

const pathh = path.resolve(__dirname,'public');
app.use(express.static(pathh));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

const AccountRoutes = require('./routes/account')

const {errHandel} = require('./ultilities/customErr')

app.use('/account',AccountRoutes)

app.all('*',(req,res,next)=>{
  const err = new Error ('Not Found');
  err.statusCode = 404;
  next(err)
})
app.use(errHandel)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

