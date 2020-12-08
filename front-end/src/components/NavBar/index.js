import { header } from './style.module.css';

import logo from '../../assets/logo-GCB.png';
import { Link } from 'react-router-dom';

const NavBar = ({ listMenu }) => {
  return (
    <>
      <header className={header}>
        <img src={logo} alt="logo-GCB" />
        <ul>
          {listMenu.map((item, index) => (
            <Link to={`/${item.ref}`} key={index}>
              <li >{item.title}</li>
            </Link>
          ))}
        </ul>
      </header>
    </>
  )
}

export default NavBar;