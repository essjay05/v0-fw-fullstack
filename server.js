const path = require('path')
const express = require("express")
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
app.use('/api/wheel', wheelRoutes)
app.use('/api/user', userRoutes)


// Home route
app.use('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public/views', 'wheel.html'))
})

// Default 404 route (if route has no match)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public/views', '404.html'))
})



app.get('/profile', (req,res) => {
    res.send('getting profile')
})

app.post('/profile', (req,res) => {
    console.log(req.body)

    res.send(`Success! User is: ${req.body.name}, Hobby is: ${req.body.hobby}`)
})

// Prints a log once server starts listening
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})