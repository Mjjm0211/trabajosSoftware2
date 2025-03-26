const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
const movieRoutes = require('./routes/moviesRoutes')
require('dotenv').config(); // carga las variables de entorno
const cors = require('cors'); // importa CORS


const app = express();


app.use(express.json());

// accede a la URI de MongoDB desde el archivo .env
const mongoURI = process.env.MONGO_URI; // usamos la variable MONGO_URI

if (!mongoURI) {
  console.error('Error: La URI de MongoDB no está definida en las variables de entorno.');
  process.exit(1); // detiene la aplicación si no hay URI
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });



app.use(cors());
// middleware para analizar el cuerpo de las peticiones
app.use(bodyParser.json())


// Usa las rutas de usuario
app.use('/users', userRoutes)
app.use('/movies', movieRoutes)


// Inicia el servidor
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
