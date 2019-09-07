const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev/data/tours-simple.json`));

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { tours }
  });
}

const getTour = (req, res) => {
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
}

const createTour = (req, res) => {
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
}

const updateTour = (req, res) => {
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
}

const deleteTour = (req, res) => {
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
}

const getAllUsers = (req, res) => {
  // 500: Internal Server Error
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  })
}

const getUser = (req, res) => {
  // 500: Internal Server Error
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  })
}

const createUser = (req, res) => {
  // 500: Internal Server Error
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  })
}

const updateUser = (req, res) => {
  // 500: Internal Server Error
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  })
}

const deleteUser = (req, res) => {
  // 500: Internal Server Error
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  })
}

app.route('/api/v1/tours')
  .get(getAllTours)
  .post(createTour);

app.route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour)

app.route('/api/v1/users')
  .get(getAllUsers)
  .post(createUser)

app.route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser)

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));