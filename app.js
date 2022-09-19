const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors =  require('cors')
const morgan = require('morgan')

const petRoutes = require('./routes/pet');

const app = express();


app.use(bodyParser.json());
app.use(cors())
app.use(morgan('dev'))



app.use('/api', petRoutes);

const PORT = 8080;

mongoose
  .connect('mongodb+srv://dipesh:dipesh@cluster0.3gapvzd.mongodb.net/test',{ useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(result => {
    app.listen(PORT);
  })
  .catch(err => console.log(err));
