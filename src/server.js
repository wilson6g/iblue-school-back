const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

app.listen(process.env.NODE_PORT, () => console.log('✔️  Server is running on port ' + process.env.NODE_PORT));