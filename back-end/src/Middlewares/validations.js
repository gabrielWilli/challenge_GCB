const { body, validationResult } = require('express-validator');

exports.validationsRegisterDoctor = [

  body("nameDoctor")
    .isLength({ max: 120 })
    .withMessage('Name must contain a maximum of 120 characters'),


  function (req, res, next) {
    const erros = validationResult(req)
    if (!erros.isEmpty()) {
      return res.status(400).json({ error: erros.array() });
    }

    next()
  }

]
