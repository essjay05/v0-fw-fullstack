const express = require('express')

const router = express.Router()

// Admin only routes

// Access Admin page
router.get('/', (req, res, next) => {
    res.status(200).send('<h1>Admin Page</h1>')
})

// Read (get) all users *admin only

// Update multiple users *admin only

module.exports = router