import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

import api from '../../service/api';

import Button from "../../components/Button";
import iconPlus from '../../assets/iconPlus.svg';
import style from './style.module.css';

const Doctors = () => {

  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    const getDoctors = async () => {
      const response = await api.get('/doctors')
      const data = await response.data
      setDoctors(data)
      console.log(data)
    }
    getDoctors()
  }, [])

  return (
    <>
      <Link to="/registerDoctor">
        <Button
          image={iconPlus}
          altImage="icon-plus"
          color="#35D044"
          methodo="POST">
          <img src={iconPlus} alt="icon-plus" />
          Novo doutor
          </Button>
      </Link>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.titleTable}>Nome doutor</th>
            <th className={style.titleTable}>CRM</th>
            <th className={style.titleTable}>Telefone fixo</th>
            <th className={style.titleTable}>Telefone celular</th>
            <th className={style.titleTable}>Especialidades</th>
            <th className={style.titleTable}>Ações</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((item, index) => (
            <>
              <tr key={index}>
                <td>{item.nameDoctor}</td>
                <td>{item.crm}</td>
                <td>{item.landline}</td>
                <td>{item.cellPhone}</td>
                <td>{item.specialties}</td>
                <td><Button color="#3D90F6">Detalhes</Button></td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Doctors;