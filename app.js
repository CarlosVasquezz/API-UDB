const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Rutas
const materiasRouter = require('./routes/index');  // Ajusta la ruta correcta al archivo de rutas

app.use('/api', materiasRouter);  // Define la ruta base para todas las rutas de materias

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
