const mongoose = require('mongoose')

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    description: {
      type: String,
      required: [true, 'Please add an description'],
      unique: true,
    },
    price: {
      type: String,
      required: [true, 'Please add a price'],
    },
    image: {
      type: String,
      // required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Item', itemSchema)
