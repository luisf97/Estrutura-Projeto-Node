const express = require('express');
const app = express();
const morgan = require('morgan');
const Router = require('./config/app')
const connection = require('./database/connection')

const PORT = 8089;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan('tiny'));

Router(app)

// Conexão com o mysql
connection
    .authenticate()
    .then(() => console.log('Connected with database!'))
    .catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));