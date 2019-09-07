const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '../dev', 'data', 'tours-simple.json');
const tours = JSON.parse(fs.readFileSync(filepath));

exports.checkID = (req, res, next, val) => {
  const id = Number(val);
  const tour = tours.find(el => el.id === id);
  
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }

  next();
}

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { tours }
  });
}

exports.getTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { tour }
  });
}

exports.createTour = (req, res) => {
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

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour>'
    }
  });
}

exports.deleteTour = (req, res) => {
  // 204: No Content
  res.status(204).json({
    status: 'success',
    data: null
  });
}
