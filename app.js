const express = require('express');

const tourRouter = require('./routes/tours');
const userRouter = require('./routes/users');

const app = express();
app.use(express.json());

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));