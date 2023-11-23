const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/food-wheel-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))