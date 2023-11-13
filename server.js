// Load HTTP module
const http = require("http")

const PORT = 8000
const hostname = "127.0.0.1"

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set response HTTP header with HTTP status and Content type
    res.writeHead(200, {"Content-Type": "text/plain"})

    // Send the response body "Hello world"
    res.end("Hello World\n")
})

// Prints a log once server starts listening
server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}`)
})