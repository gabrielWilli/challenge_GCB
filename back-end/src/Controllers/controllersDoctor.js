const doctorSchema = require('../Models/doctor')

exports.getAllDoctors = async (req, res) => {
  try {
    const getAllDoctors = await doctorSchema.find()
      .sort({ date: -1 })
      .lean()

    res.json(getAllDoctors)

  } catch (error) {
    res.status(400).json({ "mensagem": `Error consulting doctors: ${error}` })
  }
}

exports.getDoctorId = async (req, res) => {
  const { idDoctor } = req.params

  try {
    const getIdDoctor = await doctorSchema.findOne({
      _id: idDoctor
    }).lean()

    res.json(getIdDoctor)

  } catch (error) {
    res.status(400).json({ "mensagem": `Error consulting doctor id ${idDoctor}: ${error}` })
  }
}

exports.registerDoctor = async (req, res) => {
  const { nameDoctor, crm, landline, cellPhone, cep } = req.body

  try {
    await doctorSchema({
      nameDoctor,
      crm,
      landline,
      cellPhone,
      cep
    }).save()

    res.json({ "mensagem": "Doctor successfully registered" })

  } catch (error) {
    res.status(400).json({ "mensagem": `Error when registering doctor: ${error}` })
  }
}

exports.alterDoctorId = async (req, res) => {
  const { idDoctor } = req.params
  const updates = req.body

  try {
    await doctorSchema.findOneAndUpdate({ _id: idDoctor }, updates, { new: true })
    res.json({ "mensagem": "Successfully changed data" })

  } catch (error) {
    res.status(400).json({ "mensagem": `Error changing doctor id data ${idDoctor}: ${error}` })
  }

}

exports.deleteDoctorId = async (req, res) => {
  const { idDoctor } = req.params

  try {
    await doctorSchema.deleteOne({ _id: idDoctor })
    res.json({ "mensagem": `Doctor successfully deleted` })

  } catch (error) {
    res.status(400).json({ "mensagem": `Error deleting doctor id ${idDoctor}: ${error}` })
  }

}

