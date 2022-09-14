const express = require("express");
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())
var path = require('path');
require("dotenv").config()


var pathh = path.resolve(__dirname,'public');
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

