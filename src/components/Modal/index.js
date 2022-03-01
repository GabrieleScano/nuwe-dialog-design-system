import { Button } from '../Button'
import imageX from './assets/images/close-btn.svg'
import { Body } from './Body'
import { CloseBtnX } from './CloseBtnX'
import { Footer } from './Footer'
import { Header } from './Header'
import { Icon } from './Icon'

export const Modal = ({ modalType, modalIsOpen, handleToggleModal }) => {

  return (
    modalIsOpen && (
      <div className='modal__overlay'>
        <div className="modal__dialog">
          <Icon src={modalType.icon} className='modal__icon_type' />
          <CloseBtnX className='close-x' closeImg={imageX} alt='Close Modal' onClickbtn={handleToggleModal} />
          <Header title={modalType.title} className='header' />
          <Body className='modal__body' description={modalType.text} />
          <Footer className='modal_footer'>

            {
              modalType.btn_text && (
                <Button
                  text={modalType.btn_text}
                  btn_class={modalType.btn_class_delete}
                />
              )
            }

            {
              modalType.btn_text_cancel && (
                <Button
                  text={modalType.btn_text_cancel}
                  btn_class={modalType.btn_class}
                  onClickbtn={handleToggleModal}
                />
              )
            }

          </Footer>
        </div>
      </div>
    )
  )
}

