var express = require('express')
var router = express.Router()
var controller = require('../controllers/PacienteController')
var upload = require('../config/Multer')

// Ruta para crear registro de paciente
router.post('/paciente', controller.CreatePaciente)

// Ruta para obtener paciente por Id
router.get('/paciente/:id', controller.GetPacienteById)
// Ruta para obtener todos los pacientes
router.get('/pacientes', controller.GetPacientes)

// Ruta para búsqueda personalizada (sexo, enfermedad)
router.get('/pacientes/search/:filter', controller.SearchPacientesByFilter)
// Ruta para búsqueda por fecha
router.get('/pacientes/search/:filter', controller.SearchPacientesByFechaIngreso)

router.put('/paciente/:id', controller.UpdatePaciente)
router.delete('/paciente/:id', controller.DeletePaciente)

router.post('/imagen/upload/:id', upload, controller.UploadFile)
router.get('/imagen/:filename', controller.GetFile)

module.exports = router