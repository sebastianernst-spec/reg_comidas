const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Solo profesores autenticados pueden registrar alumnos
router.post('/add', isAuthenticated, studentController.createStudent);
router.get('/list', isAuthenticated, studentController.listStudents);

module.exports = router;