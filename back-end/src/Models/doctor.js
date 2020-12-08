const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nameDoctor: {
    type: String,
  },
  crm: {
    type: Number,
  },
  landline: {
    type: Number,
  },
  cellPhone: {
    type: Number,
  },
  cep: {
    type: Number
  },
  specialties: {
    type: Array
  },
  flagDelete: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('doctorSchema', schema);