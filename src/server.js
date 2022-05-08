const express = require('express');
const dotenv = require('dotenv');
const dbInit = require('./infrastructure/database/building-modeling-structure');
const userRoutes = require('./routes/user.routes');
const mathRouter = require('./routes/math.routes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(mathRouter);

dbInit();

app.listen(process.env.NODE_PORT, () => console.log('✔️  Server is running on port ' + process.env.NODE_PORT));