const express = require("express");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())
const path = require('path');
require("dotenv").config()




const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

