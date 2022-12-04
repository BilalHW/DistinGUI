const mongoose = require('mongoose')

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
    },
    description: {
      type: String,
      
    },
    price: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Item', itemSchema)
