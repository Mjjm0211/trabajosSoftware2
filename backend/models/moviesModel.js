const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    titulo: { 
        type: String, required: true 
    },
    director: { 
        type: String, required: true 
    },
    anio: { 
        type: Number, required: true 
    },
    genero: { 
        type: String, required: true 
    },
    sinopsis: { 
        type: String, required: true 
    },
    duracion: { 
        type: Number, required: true 

    },
    imagen: { 
        type: String, required: true 

    }
    });
    


const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;