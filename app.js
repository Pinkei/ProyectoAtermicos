const express = require ('express');
const mongoose = require ('mongoose');

port = 3000;


const app = express();
app.set('view engine', 'hbs');

//----------------------Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//--------------------------------configuracion de mongo aplication----------------------------
mongoose.connect('mongodb://127.0.0.1:27017/Atermicos', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', err => {
  console.error('Error de conexión a la base de datos:', err);

});

//-----------------------Controladores--------------------------
const homeController = require('./controllers/homeController');
const productRoutes = require('./routes/products');

//-------------------------------------Rutas_-----------------------------
app.use('/products', productRoutes);
app.get('/', homeController.index);




//inicia el servidor
app.listen(port , ()=> {
    console.log(`servidor funcionando en ${port}`)
})