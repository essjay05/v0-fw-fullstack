const mongoose = require('mongoose')

const foodTypeSchema = new mongoose.Schema({
  name: String,
  favorite: Boolean,
  wheels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Wheel' /* Wheel Schema */
  }]
}, { timestamps: true })

const FoodType = mongoose.model('FoodType', foodTypeSchema)

module.exports = FoodType