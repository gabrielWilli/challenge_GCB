import style from './style.module.css';

const Button = ({ children, color, typeButton }) => {
  return (
    <button type={typeButton} className={style.button} style={{ backgroundColor: color }}>
      {children}
    </button>
  )
}

export default Button;