const Tour = require('../models/tours');

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
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
