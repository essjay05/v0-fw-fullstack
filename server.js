const express = require("express")
const bodyParser = require("body-parser")
const PORT = 3000

const app = express()

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))

// Home Page
app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>')
})

// Prints a log once server starts listening
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})