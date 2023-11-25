const path = require('path')

const express = require('express')

const wheelsController = require('../controllers/wheels')

const router = express.Router()

// Create Wheel
router.get('/customize-wheel', wheelsController.getCustomizeWheel)

// Get 1 wheel (default/user's latest wheel)
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public/views', 'wheel.html'))
})

// Get all wheels

// Update 1 wheel

// Delete 1 wheel

// Delete all wheels

module.exports = router