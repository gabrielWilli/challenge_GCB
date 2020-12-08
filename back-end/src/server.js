const requireDir = require('require-dir');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const dotenv = require('dotenv').config({
  path: 'env/.env'
});

const app = express();

const DB_HOST = process.env.DB_HOST
const DB_COLLECTION = process.env.DB_COLLECTION

const database = require('./Database/database');
database(`mongodb://${DB_HOST}/${DB_COLLECTION}`)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const router = requireDir('./Routers')
app.use('/doctors', router.doctors)

const port = 3001 || process.env.PORT;
app.listen(port, () => console.log(`>> server running on the port ${port}`)) 