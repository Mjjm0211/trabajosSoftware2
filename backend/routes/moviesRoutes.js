const express = require('express');
const router = express.Router();
const Movie = require('../models/moviesModel');

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const movie = new Movie({
        titulo: req.body.titulo,
        director: req.body.director,
        anio: req.body.anio,    
        genero: req.body.genero,
        sinopsis: req.body.sinopsis,
        duracion: req.body.duracion,
        imagen: req.body.imagen
    });

    try {   
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar una película
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id);    
    if (!movie) {
        return res.status(404).json({ message: 'Película no encontrada' });
    }
    res.status(200).json({ message: 'Película eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Editar una película
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, director, anio, genero, sinopsis, duracion, imagen } = req.body;     
    const updatedMovie = await Movie.findByIdAndUpdate(id, { titulo, director, anio, genero, sinopsis, duracion, imagen }, { new: true });
    if (!updatedMovie) {
        return res.status(404).json({ message: 'Película no encontrada' });
    }
    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;




