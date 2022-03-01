import imageX from '../assets/images/close-btn.svg'

export const CloseBtnX = ({ onClickbtn, className }) => {
  return (
    <div className={className}>
      <img
        src={imageX}
        alt='Close Modal'
        onClick={onClickbtn}
      />
    </div>
  )
}