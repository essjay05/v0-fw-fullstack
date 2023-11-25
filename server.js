const path = require('path')
const express = require("express")
const bodyParser = require("body-parser")
const PORT = 4444

const app = express()

// Connect Routers
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')
const wheelRoutes = require('./routes/wheel')

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/admin', adminRoutes)
app.use(wheelRoutes)
app.use(userRoutes)

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
// })

// Test routes
app.get('/profile', (req,res) => {
    res.send('getting profile')
})

app.post('/profile', (req,res) => {
    console.log(req.body)
    const user = {
        name: 'Joy',
        hobby: 'drawing'
    }
    res.send(user)
})

// Prints a log once server starts listening
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})