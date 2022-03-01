import { useState } from 'react'
import './App.css'
import '../src/components/Modal/style.css'

import { modalTypes } from './components/Modal/assets/modalTypes/modalTypes'
import { Modal } from './components/Modal'
import { Button } from './components/Button'
import { ButtonGroupContainer } from './components/ButtonGroupContainer'

const App = () => {
  const [modalType, setModalType] = useState(modalTypes[0])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  

  const handleToggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleModalType = (type) => {
    setModalType(type);
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <div className="App">
      <div className="App__container">
        <ButtonGroupContainer>
          {modalTypes.map((type, index) => {
            return (
              <Button
                key={index}
                text={type.btn_title}
                btn_class={type.btn_className}
                onClickbtn={() => handleModalType(type)}
              />
            )
          })}
        </ButtonGroupContainer>
      </div>
        <Modal
          className='modal__dialog'
          modalType={modalType}
          modalIsOpen={modalIsOpen}
          handleToggleModal={handleToggleModal}
        />
    </div>
  )
}

export default App;
