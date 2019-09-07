const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev/data/tours-simple.json`));

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { tours }
  });
});

app.post('/api/v1/tours', (req, res) => {
  // console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(`${__dirname}/dev/data/tours-simple.json`, JSON.stringify(tours), err => {
    // 201: Created
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  });
});

/* 
  Params :param
  Optional params :param?
*/
app.get('/api/v1/tours/:id', (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find(el => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }

  res.status(200).json({
    status: 'success',
    data: { tour }
  });
});

app.patch('/api/v1/tours/:id', (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find(el => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour>'
    }
  });
});

app.delete('/api/v1/tours/:id', (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find(el => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }

  // 204: No Content
  res.status(204).json({
    status: 'success',
    data: null
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));