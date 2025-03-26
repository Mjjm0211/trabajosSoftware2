const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // El modelo de usuario
// el modelo de usuario que vamos a usar


// obtiene todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.find();  // obtiene todos los usuarios desde MongoDB
    res.json(users);  // envia los usuarios como respuesta en formato JSON
  } catch (err) {
    res.status(500).json({ message: err.message });  // responde con un mensaje de error si falla
  }
});

// crea un nuevo usuario
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password, // encripta la contraseña antes de guardarla
  });

  try {
    const newUser = await user.save();  // Guarda el nuevo usuario en la base de datos
    res.status(201).json(newUser);  // Responde con el nuevo usuario creado
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Elimina un usuario
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Edita un usuario
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
