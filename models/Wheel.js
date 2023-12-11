const mongoose = require('mongoose')

const wheelSchema = new mongoose.Schema({
  favorite: Boolean,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' /* User Schema */
  },
  foodTypes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FoodType' /* FoodType Schema */
    }] 
}, { timestamps: true })

const Wheel = mongoose.model('Wheel', wheelSchema)
module.exports = Wheel