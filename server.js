// Load HTTP module
const http = require("http")
// const express = require("express")
const PORT = 8000

// Create HTTP server
const app = http.createapp((req, res) => {
    // Set response HTTP header with HTTP status and Content type
    res.writeHead(200, {"Content-Type": "text/plain"})

    // Send the response body "Hello world"
    res.end("Hello World\n")
})

// Prints a log once server starts listening
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})