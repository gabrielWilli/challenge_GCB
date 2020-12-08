import logo from '../../assets/logo-GCB.png';

import style from './style.module.css';

const Home = () => {
  return (
    <>
      <main className={style.main}>
        <img src={logo} alt="Logo GCB" />
        <h2>Challenge</h2>
      </main>
    </>
  )
}

export default Home;