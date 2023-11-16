const path = require('path')

const express = require('express')

const router = express.Router()

// Create Wheel

// Get 1 wheel (default/user's latest wheel)
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'wheel.html'))
})

// Get all wheels

// Update 1 wheel

// Delete 1 wheel

// Delete all wheels

module.exports = router