const express = require('express')

const router = express.Router()

// Access "Add User" page
router.use('/add-user', (req, res, next) => {
    res.send(
        '<form action="/user" method="POST"><input type="text" name="username"/><button type="submit">Submit</button>'
    )
})

// Create user
router.post('/user', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

// Read (get) 1 user

// Update 1 user

// Delete 1 user

// Delete multiple users *admin only




module.exports = router


