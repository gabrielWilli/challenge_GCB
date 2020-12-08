const router = require('express').Router();

const controllersAnime = require('../Controllers/controllersDoctor');
const middlewareValidations = require('../Middlewares/validations');

router.get('/', controllersAnime.getAllDoctors)
router.post('/', middlewareValidations.validationsRegisterDoctor, controllersAnime.registerDoctor)

router.get('/:idDoctor', controllersAnime.getDoctorId)
router.delete('/:idDoctor', controllersAnime.deleteDoctorId)
router.put('/:idDoctor', controllersAnime.alterDoctorId)

module.exports = router