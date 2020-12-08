import { useState } from 'react'

import Button from '../../components/Button'
// import Form from '../../components/Form/index'

import api from '../../service/api';

const RegisterDoctor = () => {

  const [mensagens, setMensagens] = useState('')
  const [inputs, setInputs] = useState({
    nameDoctor: '',
    crm: '',
    landline: '',
    cellPhone: '',
    cep: '',
    esp: '',
  })

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    api.post('/doctors', inputs)
      .then(res => setMensagens(res.data.mensagem))
      .catch(err => setMensagens("deu ruim amigao"))
  }

  return (
    <>

      {mensagens ? <h1>{mensagens}</h1> : <h1>{mensagens}</h1>}
      <form onSubmit={handleSubmit} method="POST" action="http://localhost:3001/doctors">
        <div>
          <label>Nome doutor</label>
          <input onChange={handleChange} placeholder="Nome..." name="nameDoctor" />
        </div>
        <div>
          <label>CRM</label>
          <input onChange={handleChange} placeholder="CRM..." name="crm" />
        </div>
        <div>
          <label>Telefone Fixo</label>
          <input onChange={handleChange} placeholder="Digite apenas número..." name="landline" />
        </div>
        <div>
          <label>Telefone celular</label>
          <input onChange={handleChange} placeholder="Digite apenas número..." name="cellPhone" />
        </div>
        <div>
          <label>CEP</label>
          <input onChange={handleChange} placeholder="Digite apenas números..." name="cep" />
        </div>
        <div>
          <label>Especialidades</label>
          <input onChange={handleChange} placeholder="Digite suas especialidades, após finalize com ENTER" />
        </div>

        <Button typeButton="submit">Cadastrar doutor</Button>
      </form>
    </>
  )
}

export default RegisterDoctor;