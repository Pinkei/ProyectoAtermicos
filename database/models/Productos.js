const mongoose = require('mongoose');

const atermicosSchema = new mongoose.Schema({
  producto: String,
  precio_unitario: Number,
});

module.exports = mongoose.model('productos', atermicosSchema); //mi primera collegion va con P mayuscula Productos, la otra se me hizo cuando yo creo en la pagina.