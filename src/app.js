const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
//const studentRoutes = require('./routes/studentRoutes');
const path = require('path');
const PORT = process.env.PORT || 3000;

// Configuración de Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Uso de los módulos
app.use('/auth', authRoutes);
//app.use('/students', studentRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configura la carpeta donde están los archivos .stitch
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'stitch'); // O el nombre del motor que estés usando

// Configuración para que el diseño se vea bien (CSS, Imágenes)
//app.use(express.static(path.join(__dirname, 'public')));

// Si decidiste usar HTML simple:
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});