import './style.css'

export const Button = ({ text, btn_class, onClickbtn }) => {
  return (
    <button
      className={btn_class}
      onClick={onClickbtn}>
      {text}
    </button>
  )
}
