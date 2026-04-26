const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rutas para Login y Registro de Profesores/Usuarios
router.get('/login', authController.showLogin);
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;