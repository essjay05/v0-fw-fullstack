// Load HTTP module
const http = require("http")

const express = require("express")
const PORT = 8000

const app = express()

// Create HTTP server
const server = http.createServer(app)

// Prints a log once server starts listening
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})