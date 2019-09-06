const fs = require('fs');
const express = require('express');
const app = express();

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev/data/tours-simple.json`));

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { tours }
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));