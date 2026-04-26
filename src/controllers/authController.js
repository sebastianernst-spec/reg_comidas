// src/controllers/authController.js

/**
 * Muestra la pantalla de login (GET)
 */
exports.showLogin = (req, res) => {
    // Aquí renderizamos tu archivo exportado de Stitch
    // Asegúrate de que el archivo esté en /src/views/login.html (o .ejs)
    res.render('login', { error: null }); 
};

/**
 * Procesa los datos del login (POST)
 */
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Por ahora, como es la primera tarea, haremos una validación básica:
        console.log(`Intento de inicio de sesión: ${email}`);

        if (email === "profe@colegio.cl" && password === "1234") {
            // Si es correcto, redirigimos al dashboard de alumnos
            return res.redirect('/students/list');
        } else {
            // Si falla, volvemos a cargar el login con un mensaje
            return res.render('login', { error: "Credenciales incorrectas" });
        }
    } catch (error) {
        console.error("Error en login:", error);
        res.status(500).send("Error interno del servidor");
    }
};

/**
 * Muestra la pantalla de registro (GET)
 */
exports.showRegister = (req, res) => {
    res.render('register', { error: null });
};

/**
 * Procesa el registro de un nuevo usuario/profesor (POST)
 */
exports.register = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        
        // Aquí iría la lógica para guardar en la base de datos
        console.log(`Registrando nuevo profesor: ${nombre} (${email})`);

        // Tras registrar, lo enviamos al login
        res.redirect('/auth/login');
    } catch (error) {
        console.error("Error en registro:", error);
        res.render('register', { error: "No se pudo completar el registro" });
    }
};