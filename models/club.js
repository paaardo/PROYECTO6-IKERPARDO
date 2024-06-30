const mongoose = require('mongoose')

const clubSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Club', clubSchema)
