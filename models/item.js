const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  valoracion: {type: Number, required: true},
  date_estreno: {type: String, required: true},
  // Otros campos que desees para tu modelo
});

module.exports = mongoose.model('Item', itemSchema);
