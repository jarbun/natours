const express = require('express');

const tourRouter = require('./routes/tours');
const userRouter = require('./routes/users');

const app = express();
app.use(express.json());

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;