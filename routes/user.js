const express = require('express')

const router = express.Router()

// Create user
router.use('/add-user', (req, res, next) => {
    res.send(
        '<form action="/user" method="POST"><input type="text" name="username"/><button type="submit">Submit</button>'
    )
})

// Read (get) 1 user

// Update 1 user

// Delete 1 user

// Delete multiple users *admin only


// Admin only routes

// Read (get) all users *admin only

// Update multiple users *admin only

module.exports = router


