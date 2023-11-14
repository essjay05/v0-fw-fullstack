const express = require("express")
const bodyParser = require("body-parser")
const PORT = 3000

const app = express()

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))

// Prints a log once server starts listening
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})