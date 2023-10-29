const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/materiaController');  // Ajusta la ruta correcta al controlador

// Ruta para obtener todas las materias de una carrera
router.get('/carrera/:carrera/materias', materiaController.getMaterias);

// Ruta para consultar prerrequisitos de una materia por código
router.get('/materia/prerrequisitos/:codigo', materiaController.getPrerrequisitos);

// Ruta para inscripción de materias
router.post('/inscripcion', materiaController.inscribirMateria);

// Ruta para eliminar inscripciones de materias
router.delete('/inscripcion/:id', materiaController.eliminarInscripcion);

module.exports = router;
