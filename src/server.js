const express = require('express');
const dotenv = require('dotenv');
const dbInit = require('./infrastructure/database/building-modeling-structure');

dotenv.config();

const app = express();

app.use(express.json());

dbInit();
app.listen(process.env.NODE_PORT, () => console.log('✔️  Server is running on port ' + process.env.NODE_PORT));