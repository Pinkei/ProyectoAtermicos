const mongoose = require('mongoose');

const atermicosSchema = new mongoose.Schema({
  producto: String,
  precio_unitario: Number,
});

module.exports = mongoose.model('productos', atermicosSchema);