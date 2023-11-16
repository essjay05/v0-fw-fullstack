const path = require('path')
const express = require("express")
const bodyParser = require("body-parser")
const PORT = 3000

const app = express()

// Connect Routers
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')
const wheelRoutes = require('./routes/wheel')

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.use('/admin', adminRoutes)
app.use(wheelRoutes)
app.use(userRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

// Prints a log once server starts listening
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})