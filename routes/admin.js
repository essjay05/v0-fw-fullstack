const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

// Admin only routes

// Access Admin page
router.get('/', (req, res, next) => {
    res.status(200).sendFile(path.join(rootDir, 'public/views', 'admin.html'))
})

// Read (get) all users *admin only

// Update multiple users *admin only

module.exports = router