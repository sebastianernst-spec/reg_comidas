// src/controllers/studentController.js
const path = require('path');
exports.listStudents = (req, res) => {
    res.sendFile(path.join(__dirname, '../list.html'));
};

exports.createStudent = (req, res) => {
    res.send("Formulario para registrar alumnos");
};