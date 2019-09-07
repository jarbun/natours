const express = require('express');

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

const router = express.Router();

router.route('/')
  .get(getAllUsers)
  .post(createUser)

router.route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser)

module.exports = router;