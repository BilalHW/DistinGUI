const mongoose = require('mongoose')

const categorySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Item',
    },
    name: {
      type: String,
      required: [true, 'Please add a name value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Category', categorySchema)