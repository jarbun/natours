const express = require('express');
const controller = require('../controllers/tours');

const router = express.Router();

router.route('/')
  .get(controller.getAllTours)
  .post(controller.createTour);

router.route('/:id')
  .get(controller.getTour)
  .patch(controller.updateTour)
  .delete(controller.deleteTour)

module.exports = router;