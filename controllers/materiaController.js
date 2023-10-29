// controllers/materiaController.js

// Datos de ejemplo (pensum de dos carreras con 10 materias cada una)
const pensumTecnico = [
    { codigo: 'TIC101', nombre: 'Introducción a la Computación', uv: 4 },
    { codigo: 'TIC102', nombre: 'Programación Básica', uv: 4 },
    { codigo: 'TIC103', nombre: 'Estructuras de Datos', uv: 4 },
    { codigo: 'TIC104', nombre: 'Programación Web', uv: 4 },
    { codigo: 'TIC105', nombre: 'Sistemas Operativos', uv: 4 },
    { codigo: 'TIC106', nombre: 'Bases de Datos', uv: 4 },
    { codigo: 'TIC107', nombre: 'Redes de Computadoras', uv: 4 },
    { codigo: 'TIC108', nombre: 'Inteligencia Artificial', uv: 4 },
    { codigo: 'TIC109', nombre: 'Seguridad Informática', uv: 4 },
    { codigo: 'TIC110', nombre: 'Proyecto Final', uv: 6 },
  ];
  
  const pensumIngenieria = [
    { codigo: 'IC1001', nombre: 'Álgebra Lineal', uv: 4 },
    { codigo: 'IC1002', nombre: 'Cálculo Diferencial', uv: 4 },
    { codigo: 'IC1003', nombre: 'Física General', uv: 4 },
    { codigo: 'IC1004', nombre: 'Introducción a la Programación', uv: 4 },
    { codigo: 'IC1005', nombre: 'Circuitos Eléctricos', uv: 4 },
    { codigo: 'IC1006', nombre: 'Análisis de Algoritmos', uv: 4 },
    { codigo: 'IC1007', nombre: 'Sistemas Operativos', uv: 4 },
    { codigo: 'IC1008', nombre: 'Bases de Datos Avanzadas', uv: 4 },
    { codigo: 'IC1009', nombre: 'Redes de Computadoras', uv: 4 },
    { codigo: 'IC1010', nombre: 'Proyecto de Investigación', uv: 6 },
  ];
  
  
  // Consultar materias de una carrera
  function getMaterias(req, res) {
    const carrera = req.params.carrera;
  
    let pensum;
    if (carrera === 'tecnico') {
      pensum = pensumTecnico;
    } else if (carrera === 'ingenieria') {
      pensum = pensumIngenieria;
    } else {
      return res.status(404).json({ error: 'Carrera no encontrada' });
    }
  
    res.json(pensum);
  }
  
// Consultar prerrequisitos de una materia por código
function getPrerrequisitos(req, res) {
    const codigo = req.params.codigo;
    // Implementa la lógica para buscar los prerrequisitos de la materia con el código especificado
    // Ejemplo de lógica simplificada:
    const prerrequisitos = buscarPrerrequisitos(codigo); // Debes implementar esta función
    if (prerrequisitos) {
      res.json(prerrequisitos);
    } else {
      res.status(404).json({ error: 'Materia no encontrada' });
    }
  }
  
  // Consultar materias por ciclo
  function getMateriasPorCiclo(req, res) {
    const ciclo = req.params.ciclo;
    // Implementa la lógica para buscar las materias de un ciclo específico
    // Ejemplo de lógica simplificada:
    const materiasPorCiclo = buscarMateriasPorCiclo(ciclo); // Debes implementar esta función
    if (materiasPorCiclo) {
      res.json(materiasPorCiclo);
    } else {
      res.status(404).json({ error: 'Ciclo no encontrado' });
    }
  }
  
  // Inscribir materias
  function inscribirMaterias(req, res) {
    const inscripciones = req.body;
    // Implementa la lógica para validar y realizar la inscripción de materias
    // Verifica que cumplan con la cantidad de UV requeridas
    // Ejemplo de lógica simplificada:
    const resultado = inscribirMateriasFunc(inscripciones); // Debes implementar esta función
    if (resultado.exitoso) {
      res.json({ mensaje: 'Materias inscritas exitosamente' });
    } else {
      res.status(400).json({ error: 'No se pudieron inscribir todas las materias' });
    }
  }
  
  
  module.exports = {
    getMaterias,
    getPrerrequisitos,
    inscribirMateria,
    eliminarInscripcion,
  };
  