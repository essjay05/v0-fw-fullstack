const express = require("express")
const PORT = 3000

const app = express()

// Middleware

// Prints a log once server starts listening
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})