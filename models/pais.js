const mongoose = require('mongoose')

const paisSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  clubes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Club'
    }
  ]
})

module.exports = mongoose.model('Pais', paisSchema)
